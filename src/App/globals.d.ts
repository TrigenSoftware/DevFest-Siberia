
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
	const svg: typeof import('@trigen/scripts-preset-react-app/helpers/icons/IconComponent').default;
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

declare module '*?tsw' {
    const register: import('service-worker-loader/types').ServiceWorkerRegister;
    const scriptUrl: import('service-worker-loader/types').ScriptUrl;
    const ServiceWorkerNoSupportError: import('service-worker-loader/types').ServiceWorkerNoSupportError;
    export default register;
    export {
        scriptUrl,
        ServiceWorkerNoSupportError
    };
}

declare module '*?fetch' {
    const urlOrData: string | any;
    export default urlOrData;
}

interface IPrecacheEntry {
	url: string;
	revision?: string;
}

// tslint:disable-next-line
interface ServiceWorkerGlobalScope {
	__precacheManifest: IPrecacheEntry[];
}

// tslint:disable-next-line
interface Navigator {
	share?(data: {
		url?: string;
		title?: string;
		text?: string;
	}): Promise<void>;
}
