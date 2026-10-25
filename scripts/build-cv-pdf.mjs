/* eslint-disable no-console */
// Fills cv/cv.template.html with the CV data in src/data/cv.{en,es}.json and
// src/data/contact.json (the same data the /cv page uses) and prints it to
// public/cv-jesus-marquez-delgado-{en,es}.pdf with headless Chrome.
// Usage: npm run cv:pdf [-- en|es]
// Set CHROME_PATH to use a specific Chrome/Chromium binary.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));

const candidates = {
  win32: [
    join(process.env.PROGRAMFILES || 'C:/Program Files', 'Google/Chrome/Application/chrome.exe'),
    join(process.env['PROGRAMFILES(X86)'] || 'C:/Program Files (x86)', 'Google/Chrome/Application/chrome.exe'),
    join(process.env.LOCALAPPDATA || '', 'Google/Chrome/Application/chrome.exe'),
    join(process.env.PROGRAMFILES || 'C:/Program Files', 'Microsoft/Edge/Application/msedge.exe'),
  ],
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ],
  linux: [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ],
};

function findChrome() {
  if (process.env.CHROME_PATH) {
    if (!existsSync(process.env.CHROME_PATH)) {
      throw new Error(`CHROME_PATH does not exist: ${process.env.CHROME_PATH}`);
    }
    return process.env.CHROME_PATH;
  }
  const found = (candidates[process.platform] || candidates.linux).find((p) => existsSync(p));
  if (!found) {
    throw new Error('Chrome not found. Set CHROME_PATH to your Chrome/Chromium executable.');
  }
  return found;
}

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// "https://www.example.com/a%C3%B1/" -> "example.com/añ"
const linkText = (url) => decodeURIComponent(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// Looks a dotted key up in the innermost scope that has it; "." is the item itself.
function lookup(scopes, key) {
  if (key === '.') return scopes[0];
  for (const scope of scopes) {
    let value = scope;
    for (const part of key.split('.')) {
      value = value !== null && typeof value === 'object' && part in value ? value[part] : undefined;
    }
    if (value !== undefined) return value;
  }
  throw new Error(`cv.template.html: no value for {{${key}}}`);
}

// Minimal Mustache-style renderer: {{key}} inserts an escaped value and
// {{#list}}...{{/list}} repeats its content for each item of an array.
function render(template, scopes) {
  return template
    .replace(/{{#([\w.]+)}}([\s\S]*?){{\/\1}}/g, (_, key, inner) => {
      const list = lookup(scopes, key);
      if (!Array.isArray(list)) throw new Error(`cv.template.html: {{#${key}}} is not a list`);
      return list.map((item) => render(inner, [item, ...scopes])).join('');
    })
    .replace(/{{([\w.]+)}}/g, (_, key) => escapeHtml(lookup(scopes, key)));
}

export function renderCvHtml(lang) {
  const contact = readJson('src/data/contact.json');
  const cv = readJson(`src/data/cv.${lang}.json`);
  const data = {
    ...contact,
    ...cv,
    lang,
    websiteText: linkText(contact.website),
    githubText: linkText(contact.github),
    linkedinText: linkText(contact.linkedin),
    // The page lists highlights without a final period; the PDF ends them with one.
    experience: cv.experience.map((job) => ({
      ...job,
      bullets: job.highlights.map((item) => (/[.!?]$/.test(item) ? item : `${item}.`)),
    })),
    // Private projects have no url, so their link is an empty list.
    projects: cv.projects.map((project) => ({
      ...project,
      links: project.url ? [{ href: project.url, text: linkText(project.url) }] : [],
    })),
  };
  const template = readFileSync(join(root, 'cv', 'cv.template.html'), 'utf8')
    .replace(/\r\n/g, '\n')
    .replace(/<!--[\s\S]*?-->\n/g, '')
    // A section tag alone on its line leaves no blank line behind.
    .replace(/^[ \t]*({{[#/][\w.]+}})[ \t]*\n/gm, '$1');
  return render(template, [data]);
}

function buildPdf(chrome, lang) {
  const output = join(root, 'public', `cv-jesus-marquez-delgado-${lang}.pdf`);
  // The filled page goes next to the template so that relative URLs (foto.webp) resolve.
  const page = join(root, 'cv', `.cv-${lang}.tmp.html`);
  const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
  writeFileSync(page, renderCvHtml(lang));
  try {
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--no-pdf-header-footer',
      `--print-to-pdf=${output}`,
      '--virtual-time-budget=10000',
      `--user-data-dir=${profile}`,
      pathToFileURL(page).href,
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
  } finally {
    rmSync(page, { force: true });
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
  if (!existsSync(output)) throw new Error(`Chrome did not write ${output}`);
  console.log(`cv.template.html + cv.${lang}.json -> public/cv-jesus-marquez-delgado-${lang}.pdf`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const chrome = findChrome();
  const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'es'];
  for (const lang of langs) {
    if (!existsSync(join(root, 'src', 'data', `cv.${lang}.json`))) {
      throw new Error(`Missing CV data: src/data/cv.${lang}.json`);
    }
    buildPdf(chrome, lang);
  }
}
