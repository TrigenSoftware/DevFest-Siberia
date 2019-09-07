
/**
 * Global typings.
 */

declare module '*.st.css' {
	// tslint:disable-next-line
	const stylesheet: import('@stylable/runtime').RuntimeStylesheet;
	export = stylesheet;
}

declare module '*.svg' {
	// tslint:disable-next-line
	const svg: typeof import('@trigen/scripts-preset-react-app/helpers/IconComponent').default;
	export default svg;
}
