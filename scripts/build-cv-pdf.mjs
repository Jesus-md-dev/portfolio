/* eslint-disable no-console */
// Renders cv/cv-{en,es}.html to public/cv-jesus-marquez-delgado-{en,es}.pdf
// with headless Chrome. Usage: npm run cv:pdf [-- en|es]
// Set CHROME_PATH to use a specific Chrome/Chromium binary.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

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

const chrome = findChrome();
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'es'];

for (const lang of langs) {
  const source = join(root, 'cv', `cv-${lang}.html`);
  const output = join(root, 'public', `cv-jesus-marquez-delgado-${lang}.pdf`);
  if (!existsSync(source)) throw new Error(`Missing source: ${source}`);
  const profile = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
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
      pathToFileURL(source).href,
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
  } finally {
    rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
  if (!existsSync(output)) throw new Error(`Chrome did not write ${output}`);
  console.log(`cv-${lang}.html -> public/cv-jesus-marquez-delgado-${lang}.pdf`);
}
