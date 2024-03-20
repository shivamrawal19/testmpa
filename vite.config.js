
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

const defaultTemplate = 'themes/testmpa.html';

export default defineConfig(function(config) {

	return {

		base: '/',

		plugins: [
			vue(),

			// see https://www.npmjs.com/package/vite-plugin-virtual-mpa
			createMpaPlugin({ 
				verbose: true,
				htmlMinify: false,
				template: defaultTemplate,
				pages: [
					{
						name: "",
						filename: "index.html", // output into dist/index.html at build time.
						entry: "/index.js",
						data: {
							title: "Index",
						},
					},
					{
						name: "homepage",
						filename: "homepage.html", // output into dist/homepage.html at build time.
						entry: "/pages/HomePage.js",
						data: {
							title: "Homepage",
						},
					},
				],
			}),
		],
	};
})