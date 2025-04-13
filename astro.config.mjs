// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	//GitHub Pages URL
	site: 'https://Sunil-Pradhan.github.io',

	//Enable sitemap
	//site: 'https://javascript-note.com',
	integrations: [
		starlight({
			title: 'JavaScript Note',

			//Set up fonts
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/ibm-plex-sans/400.css',
				'@fontsource/ibm-plex-sans/500.css',
				'@fontsource/ibm-plex-sans/600.css',
				'@fontsource/ibm-plex-sans/700.css',
			],

			//Add logo with light and dark variants
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
			},

			//Social links
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],

			//Sidebar
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'JavaScript Exercises',
					items: [
						{ label: 'Exercises Home', slug: 'js-exercises/exercises-home' },
						// { label: 'String Exercises', slug: 'js-exercises/string-exercises'},

						{
							label: 'String',
							items: [
								{ label: 'String Exercises', slug: 'js-exercises/string/string-exercises' },
								{ label: 'Extract First N Characters From String', slug: 'js-exercises/string/extract-first-n-characters-from-string' },
								{ label: 'Check if String is Blank', slug: 'js-exercises/string/check-if-string-is-blank' },
								{ label: 'Reverse String', slug: 'js-exercises/string/reverse-string' },
								{ label: 'Split String into Array of Words', slug: 'js-exercises/string/string-to-word-array' },
								{ label: 'Check if Input is a String', slug: 'js-exercises/string/check-if-input-is-a-string' },

							],
						},
					],
				},


				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
		// mdx()
	],
});
