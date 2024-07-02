import { defineConfig, presetMini } from 'unocss';

export default defineConfig({
	extendTheme: (theme) => ({
		// ...theme,
		fontFamily: {
			title: `"Neue Leiden",${theme.fontFamily?.sans}`
		},
		colors: {
			brandred: "#F17272",
			// brandsand: "#EDE5C8",

			summer: "#3C84B9",
			autumn: "#E76E6E",
			winter: "#1E1E2F",
			spring: "#DDCA86",
		}
	}),
	presets: [
		presetMini(),
	]
})