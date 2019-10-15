/* tslint:disable */

export default function initAnalytics() {

	if (process.env.GOOGLE_ANALYTICS_ID) {
		// @ts-ignore
		window.dataLayer = window.dataLayer || [];
		const newScript = document.createElement("script");
		newScript.type = "text/javascript";
		newScript.setAttribute("async", "true");
		newScript.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`);
		document.documentElement.firstChild.appendChild(newScript);
		// @ts-ignore
		function gtag(){dataLayer.push(arguments);}
		// @ts-ignore
		gtag('js', new Date());
		// @ts-ignore
		gtag('config', process.env.GOOGLE_ANALYTICS_ID);
	}

	if (process.env.YANDEX_METRIKA_ID) {
		// @ts-ignore
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
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

	if (process.env.VK_PIXEL_ID) {
		// @ts-ignore
		!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?162",t.onload=function(){VK.Retargeting.Init(process.env.VK_PIXEL_ID),VK.Retargeting.Hit()},document.head.appendChild(t)}();
	}

	if (process.env.FB_PIXEL_ID) {
		// @ts-ignore
		!function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init",process.env.FB_PIXEL_ID),fbq("track","PageView");
	}
}
