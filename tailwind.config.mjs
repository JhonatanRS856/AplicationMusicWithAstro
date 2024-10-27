/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary : "#5157c6",
				grayColor: "#b2b2b2",
				bgDark: "rgb(30, 30, 30)",
				bgDarkvariant: "rgb(35, 35, 35)",
				bgDarkLight: "rgb(45, 45, 45)",
				hoverColor: "#ffffff1a"
			},
		},
	},
	plugins: [],
}
