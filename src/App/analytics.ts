/* tslint:disable */

export default function initAnalytics() {

	if (process.env.GOOGLE_ANALYTICS_ID) {
		// @ts-ignore
		window.dataLayer = window.dataLayer || [];
		const newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.setAttribute("async", "true");
		newScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=UA-80072831-4");
		document.documentElement.firstChild.appendChild(newScript);
		// @ts-ignore
		function gtag(){dataLayer.push(arguments);}
		// @ts-ignore
		gtag('js', new Date());
		// @ts-ignore
		gtag('config', 'UA-80072831-4');
	}

	if (process.env.YANDEX_METRIKA_ID) {
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		// @ts-ignore
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		// @ts-ignore
		ym(process.env.YANDEX_METRIKA_ID, "init", {
			webvisor: true,
			clickmap: true,
			useCDN: false,
			trackLinks: true,
			accurateTrackBounce: true,
			trackHash: true,
		});
	}
}
