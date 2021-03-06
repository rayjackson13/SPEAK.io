import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      sass: {
        includePaths: ['src/styles']
      },

      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      pages: 'build',
      static: 'build',
      fallback: null,
      precompress: false
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      resolve: {
        alias: {
          api: path.resolve('./src/api'),
          assets: path.resolve('./src/assets'),
          components: path.resolve('./src/components'),
          constants: path.resolve('./src/constants'),
          stores: path.resolve('./src/stores'),
          utils: path.resolve('./src/utils')
        }
      }
    }
  }
};

export default config;
