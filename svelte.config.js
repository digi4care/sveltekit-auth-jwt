import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import houdini from 'houdini/preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		}),
		houdini()
	],

	kit: {
		adapter: adapter(),
		alias: {
			'~': path.resolve('./src'),
			$houdini: path.resolve('./$houdini'),
			$lib: path.resolve('./src/lib')
		},
		browser: {
			hydrate: true,
			router: true
		},
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			entries: ['*']
		},
		trailingSlash: 'always',
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
