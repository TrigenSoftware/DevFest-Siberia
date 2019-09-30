
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

declare module '*.jpg' {
    const src: import('@flexis/srcset-loader/types').Src;
    const source: import('@flexis/srcset-loader/types').Source;
    const srcset: import('@flexis/srcset-loader/types').Srcset;
    const names: import('@flexis/srcset-loader/types').Names;
    export default src;
    export {
        source,
        srcset,
        names
    };
}

declare module 'raw-loader!*' {
	const str: string;
	export default str;
}

declare namespace React {
	// tslint:disable-next-line
	interface ImgHTMLAttributes<T> {
		loading?: string;
	}
}
