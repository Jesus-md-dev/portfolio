// Renders og/og-card.html to public/og-card.jpg (1200x630) for og:image / twitter:image.
// Usage: npm run og:image   (set CHROME_PATH if Chrome is not in a default location)
import { execFileSync, execSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = join(root, 'og', 'og-card.html');
const out = join(root, 'public', 'og-card.jpg');

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) throw new Error('Chrome not found; set CHROME_PATH');

const tmp = mkdtempSync(join(tmpdir(), 'og-card-'));
const png = join(tmp, 'og-card.png').split(sep).join('/');
try {
  execFileSync(chrome, [
    '--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1200,630', `--screenshot=${png}`, '--virtual-time-budget=8000',
    `--user-data-dir=${join(tmp, 'profile')}`, pathToFileURL(html).href,
  ], { stdio: 'inherit' });
  // sharp-cli via npx so sharp is not a project dependency
  execSync(`npx --yes sharp-cli@5 -i "${png}" -o "${out}" -f jpeg -q 86 --mozjpeg --progressive`, { stdio: 'inherit' });
  console.log(`Wrote ${out}`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
