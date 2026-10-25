/* eslint-disable no-console */
// Runs after `vite build` and the SSR build of src/entry-server.jsx (npm run
// build). Renders every page to static HTML with its own title, description,
// canonical URL, hreflang links and JSON-LD, so that search engines, link
// previews, ATS and AI tools that don't run JavaScript can read the CV, and
// writes /llms.txt, a plain-text summary for AI agents.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = join(root, 'build');
const ssrDir = join(root, 'build-ssr');
const SITE_URL = 'https://jzmarquez.com';

const { render, translations, cvData, contact } = await import(pathToFileURL(join(ssrDir, 'entry-server.mjs')).href);

// Netlify serves /projects from projects.html and /en from en.html; any other
// path falls back to index.html (public/_redirects).
const PAGES = [
  { url: '/', lang: 'es', section: 'cv', file: 'index.html' },
  { url: '/projects', lang: 'es', section: 'projects', file: 'projects.html' },
  { url: '/en', lang: 'en', section: 'cv', file: 'en.html' },
  { url: '/en/projects', lang: 'en', section: 'projects', file: 'en/projects.html' },
];
const META_KEYS = {
  cv: { title: 'metaTitleCv', description: 'metaDescriptionCv' },
  projects: { title: 'metaTitleProjects', description: 'metaDescriptionProjects' },
};
const LOCALES = { es: 'es_ES', en: 'en_US' };

const escapeAttr = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// "Drupal 10/11 (custom modules, Migrate API)" -> "Drupal 10/11"
const skillNames = (cv) => cv.skillGroups
  .flatMap((group) => group.items.split(' · '))
  .map((item) => item.replace(/\s*\(.*\)$/, '').trim());

function jsonLd(page, cv) {
  const job = cv.experience[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}${page.url}`,
    inLanguage: page.lang,
    name: translations[page.lang][META_KEYS[page.section].title],
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: contact.name,
      givenName: 'Jesús',
      familyName: 'Márquez Delgado',
      jobTitle: cv.role,
      description: cv.summary,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og-image.webp`,
      email: `mailto:${contact.email}`,
      telephone: contact.phone,
      address: { '@type': 'PostalAddress', addressLocality: 'Cádiz', addressRegion: 'Andalucía', addressCountry: 'ES' },
      worksFor: { '@type': 'Organization', name: job.company, url: job.url },
      alumniOf: { '@type': 'CollegeOrUniversity', name: page.lang === 'es' ? 'Universidad de Cádiz' : 'University of Cádiz' },
      hasCredential: cv.certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: cert.details.split(' · ')[0] },
      })),
      knowsAbout: skillNames(cv),
      knowsLanguage: ['es', 'en'],
      sameAs: [contact.github, contact.linkedin],
    },
  };
}

function headFor(page) {
  const t = translations[page.lang];
  const title = t[META_KEYS[page.section].title];
  const description = t[META_KEYS[page.section].description];
  const sectionPath = page.section === 'cv' ? '' : `/${page.section}`;
  const spanishUrl = `${SITE_URL}${sectionPath || '/'}`;
  const englishUrl = `${SITE_URL}/en${sectionPath}`;
  return {
    title,
    description,
    url: `${SITE_URL}${page.url}`,
    locale: LOCALES[page.lang],
    altLocale: LOCALES[page.lang === 'es' ? 'en' : 'es'],
    hreflang: [
      `<link rel="alternate" hreflang="es" href="${spanishUrl}" />`,
      `<link rel="alternate" hreflang="en" href="${englishUrl}" />`,
      `<link rel="alternate" hreflang="x-default" href="${spanishUrl}" />`,
    ].join('\n    '),
    jsonLd: JSON.stringify(jsonLd(page, cvData[page.lang]), null, 2).replace(/</g, '\\u003c'),
  };
}

function setMeta(html, attr, name, content) {
  const pattern = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!pattern.test(html)) throw new Error(`index.html has no <meta ${attr}="${name}">`);
  return html.replace(pattern, (_, start, end) => `${start}${escapeAttr(content)}${end}`);
}

function pageHtml(template, page, markup) {
  const head = headFor(page);
  let html = template
    .replace(/<html lang="[^"]*" data-lang="[^"]*">/, `<html lang="${page.lang}" data-lang="${page.lang}">`)
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeAttr(head.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, () => `<link rel="canonical" href="${head.url}" />\n    ${head.hreflang}`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => `<script type="application/ld+json">\n${head.jsonLd}\n    </script>`)
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered-path="${page.url}">${markup}</div>`);
  for (const [attr, name, content] of [
    ['name', 'description', head.description],
    ['property', 'og:title', head.title],
    ['property', 'og:description', head.description],
    ['property', 'og:url', head.url],
    ['property', 'og:locale', head.locale],
    ['property', 'og:locale:alternate', head.altLocale],
    ['name', 'twitter:title', head.title],
    ['name', 'twitter:description', head.description],
  ]) {
    html = setMeta(html, attr, name, content);
  }
  return html;
}

function llmsTxt() {
  const cv = cvData.en;
  const job = cv.experience[0];
  return [
    `# ${contact.name}`,
    '',
    `> ${cv.role}. ${cv.summary}`,
    '',
    `Location: ${cv.contact.location}. ${cv.contact.availability}.`,
    `Contact: ${contact.email}`,
    '',
    '## Experience',
    '',
    `### ${job.role}, ${job.company} (${job.start} – ${job.end})`,
    '',
    job.description,
    '',
    ...job.highlights.map((item) => `- ${item}`),
    '',
    '## Skills',
    '',
    ...cv.skillGroups.map((group) => `- ${group.label}: ${group.items}`),
    '',
    '## Selected projects',
    '',
    ...cv.projects.map((project) => `- ${project.url ? `[${project.name}](${project.url})` : project.name}: ${project.description} (${project.stack})`),
    '',
    '## Education and certifications',
    '',
    ...cv.education.map((item) => `- ${item.title}, ${item.details}`),
    ...cv.certifications.map((item) => `- ${item.title}, ${item.details}`),
    '',
    '## Languages',
    '',
    ...cv.languages.map((language) => `- ${language.name}: ${language.level}`),
    '',
    '## Links',
    '',
    `- [CV in English](${SITE_URL}/en)`,
    `- [CV in Spanish](${SITE_URL}/)`,
    `- [Projects](${SITE_URL}/en/projects): websites, apps, games and AR/VR`,
    `- [CV PDF in English](${SITE_URL}/cv-jesus-marquez-delgado-en.pdf)`,
    `- [CV PDF in Spanish](${SITE_URL}/cv-jesus-marquez-delgado-es.pdf)`,
    `- [GitHub](${contact.github})`,
    `- [LinkedIn](${contact.linkedin})`,
    '',
  ].join('\n');
}

const template = readFileSync(join(buildDir, 'index.html'), 'utf8');
for (const page of PAGES) {
  const markup = await render(page.url);
  if (!markup.includes('banner-name')) throw new Error(`Prerender of ${page.url} rendered no content`);
  const output = join(buildDir, page.file);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, pageHtml(template, page, markup));
  console.log(`prerendered ${page.url} -> build/${page.file}`);
}
writeFileSync(join(buildDir, 'llms.txt'), llmsTxt());
console.log('wrote build/llms.txt');
rmSync(ssrDir, { recursive: true, force: true });
