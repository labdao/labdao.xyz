// import adapter from '@sveltejs/adapter-auto';
import adapter_static from '@sveltejs/adapter-static'
import adapter_vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import adapter_ipfs from 'sveltejs-adapter-ipfs';

import { mdsvex } from 'mdsvex'
import path from 'path'
import remarkAttr from 'remark-attr'
import rehypeSlug from 'rehype-slug'
import 'dotenv/config'
// import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        // blog: 'src/routes/blog/_post.svelte',
        // content: 'src/lib/layouts/_contentTmpl.svelte'
      },
      remarkPlugins: [
        remarkAttr,
      ],
      rehypePlugins: [
        rehypeSlug,
      ]
    }),
  ],
  extensions: ['.svelte', '.md'],

  // Deploy to Fleek if the FLEEK env var is present, otherwise deploy to Vercel
  kit: {
    adapter: process.env.FLEEK
      ? adapter_ipfs({
        assets: './build',
        pages: './build',
        removeBuiltInServiceWorkerRegistration: true,
        injectPagesInServiceWorker: true,
        injectDebugConsole: true,
      })
      : adapter_vercel(),

    vite: {
      resolve: {
        alias: {
          // these are the aliases and paths to them
          '@lib': path.resolve('./src/lib'),
          // '@plasmid': path.resolve('./src/plasmid'), // local linked
          // '@plasmid': path.resolve('./node_modules/plasmid'), // git linked
          '@modules': path.resolve('./node_modules'),
        }
      },
    }
  },

  // ipfs, fleek; from Jolly Roger
  // kit: {
  //   adapter: adapter_ipfs({
  //     assets: './build',
  //     pages: './build',
  //     removeBuiltInServiceWorkerRegistration: true,
  //     injectPagesInServiceWorker: true,
  //     injectDebugConsole: true,
  //   }),
  //   target: '#svelte',
  //   trailingSlash: 'ignore',
  //   vite: {
  //     resolve: {
  //       alias: {
  //         // these are the aliases and paths to them
  //         '@lib': path.resolve('./src/lib'),
  //         // '@plasmid': path.resolve('./src/plasmid'), // local linked
  //         // '@plasmid': path.resolve('./node_modules/plasmid'), // git linked
  //         '@modules': path.resolve('./node_modules'),
  //       }
  //     }
  //   }
  // },
};

export default config;

