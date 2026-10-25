import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss(), svgr()],
  // The SSR build only feeds scripts/prerender.mjs. Its files are .mjs because
  // package.json has no "type": "module".
  build: isSsrBuild
    ? {
        outDir: 'build-ssr',
        rollupOptions: { output: { entryFileNames: '[name].mjs', chunkFileNames: '[name]-[hash].mjs' } },
      }
    : { outDir: 'build' },
  // MUI's ESM build uses directory imports, which Node can't load: bundle it.
  ssr: { noExternal: [/^@mui\//] },
  server: {
    port: 3000,
  },
}));
