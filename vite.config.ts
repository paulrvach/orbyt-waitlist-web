import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type {Plugin} from 'vite';
import {defineConfig, loadEnv} from 'vite';

/** Injects og:image / twitter:image with absolute URLs (required by crawlers). */
function socialImageMetaPlugin(mode: string): Plugin {
  return {
    name: 'orbyt-social-meta',
    transformIndexHtml(html) {
      const site = loadEnv(mode, '.', '').VITE_SITE_URL?.trim().replace(/\/$/, '') ?? '';
      if (!site) {
        return html.replace(
          '</head>',
          `    <!-- Link previews: set VITE_SITE_URL in .env (see .env.example) for og:image -->\n  </head>`,
        );
      }
      const imageUrl = `${site}/og-image.png`;
      const block = `    <meta property="og:url" content="${site}/" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="375" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${imageUrl}" />
`;
      return html.replace('<meta name="twitter:card" content="summary" />', '').replace('</head>', `${block}  </head>`);
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), socialImageMetaPlugin(mode)],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
