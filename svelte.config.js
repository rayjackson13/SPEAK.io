import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: {
			includePaths: ['src/styles'],
		},
	}),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					api: path.resolve('./src/api'),
					assets: path.resolve('./src/assets'),
					components: path.resolve('./src/components'),
					constants: path.resolve('./src/constants')
				}
			}
		}
	},
};

export default config;
