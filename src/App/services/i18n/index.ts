/* tslint:disable:no-magic-numbers */
import {
	I18nConfig
} from 'i18n-for-react';
import {
	coordinates,
	startTime,
	endTime,
	keywords,
	title,
	twitterSite,
	siteUrl,
	sharingImages,
	ageRange
} from '~/data';

/**
 * Routing methods:
 */

/**
 * Format localized path.
 */
export function getLocalizedPath(context: I18nConfig, path: string) {

	if (!context) {
		return path;
	}

	const locale = context.getLocale();

	return locale === 'en'
		? path
		: `/ru${path}`;
}

/**
 * Get locale from path.
 */
export function getLocaleFromPath(path: string) {
	return /^\/ru/.test(path)
		? 'ru'
		: 'en';
}

/**
 * Data methods:
 */

/**
 * Get team members from locales.
 */
export function getTeam(context: I18nConfig): any[] {

	const {
		team: {
			team
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return team;
}

/**
 * Get speakers from locales.
 */
export function getSpeakers(context: I18nConfig, type?: string): any[] {

	const {
		speakers: {
			speakers
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;
	const safeSpeakers = speakers.map(speaker => ({
		...speaker,
		text: speaker.text.replace(/(href=)/g, 'rel="noopener noreferrer" $1')
	}));

	if (type && type !== 'all') {
		return safeSpeakers.filter(speaker => speaker.type === type);
	}

	return safeSpeakers;
}

/**
 * Get speaker by id.
 */
export function getSpeaker(context: I18nConfig, id: string): any {

	const speakers = getSpeakers(context);

	return speakers.find(speaker => speaker.id === id);
}

let promoSpeakersIndex = -1;

export function getPromoSpeakers(context: I18nConfig): any[] {

	const speakers = getSpeakers(context);
	const promoSpeakers = speakers.filter(speaker => speaker.promo === true);

	if (process.env.SEED) {
		return promoSpeakers.splice(0, 3);
	}

	if (promoSpeakersIndex === -1) {
		promoSpeakersIndex = Math.floor(Math.random() * promoSpeakers.length - 3);
	}

	return promoSpeakers.splice(promoSpeakersIndex, 3);
}

/**
 * Get talk types from locales.
 */
export function getTalkTypes(context: I18nConfig): any[] {

	const {
		speakers: {
			nav
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return nav;
}

/**
 * Get grouped partners from locales.
 */
export function getPartners(context: I18nConfig): any[] {

	const {
		partners: {
			partners
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return partners;
}

/**
 * Get partners from locales.
 */
export function getPartnersInfo(context: I18nConfig, type?: string): any[] {

	const partners = getPartners(context);

	if (type && type !== 'all') {
		return partners.reduce((partners, { items }) => [
			...partners,
			...items.filter(
				item => item.type === type
			)
		], []);
	}

	return partners.reduce((partners, { items }) => [
		...partners,
		...items
	], []);
}

/**
 * Get partners types from locales.
 */
export function getPartnersTypes(context: I18nConfig): any[] {

	const {
		partners: {
			nav
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return nav;
}

/**
 * Get tickets types from locales.
 */
export function getTickets(context: I18nConfig): any[] {

	const {
		tickets: {
			items
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return items;
}

/**
 * Get share links from locales.
 */
export function getShareLinks(context: I18nConfig): Record<string, string> {

	const {
		header: {
			links
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	for (const key in links) {
		links[key] = links[key].replace(/\{SITE_URL\}/g, process.env.SITE_URL);
	}

	return links;
}

/**
 * Get footer links for visitors from context.
 */
export function getFooterVisitorsLinks(context: I18nConfig): any[] {

	const {
		footer: {
			visitorsLinks
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return visitorsLinks;
}

/**
 * Get footer DevFests links from context.
 */
export function getFooterDevFestsLinks(context: I18nConfig): any[] {

	const {
		footer: {
			devFestsLinks
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return devFestsLinks;
}

/**
 * Get footer social links from context.
 */
export function getFooterSocialLinks(context: I18nConfig): any[] {

	const {
		footer: {
			socialLinks
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return socialLinks;
}

/**
 * Get location data from context.
 */
export function getLocation(context: I18nConfig) {

	const {
		location
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return location;
}

/**
 * Get meta data from context.
 */
export function getMetaData(context: I18nConfig) {

	const {
		meta
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return {
		'keywords':            keywords,
		...meta,
		'twitter:card':        'summary',
		'twitter:site':        twitterSite,
		'twitter:title':       title,
		'twitter:description': meta.description,
		'twitter:image':       sharingImages.twitter
	};
}

/**
 * Get OpenGraph data from context.
 */
export function getOgData(context: I18nConfig) {

	const {
		meta
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return {
		'og:type':        'website',
		'og:title':       title,
		'og:site_name':   title,
		'og:url':         siteUrl,
		'og:description': meta.description,
		'og:image':       sharingImages.facebook
	};
}

/**
 * Get schema data.
 */
export function getSchemaData(context: I18nConfig) {

	const metaData = getMetaData(context);
	const speakers = getSpeakers(context);
	const location = getLocation(context);

	return {
		'@context':    'http://schema.org',
		'@type':       'Event',
		'name':        title,
		'description': metaData.description,
		'image':       sharingImages.image,
		'url':         process.env.SITE_URL,
		'startDate':   startTime,
		'doorTime':    '',
		'endDate':     endTime,
		'location': {
			'@type':   'Place',
			'name':    location.name,
			'address': {
				'@type':          'PostalAddress',
				'streetAddress':   location.streetAddress,
				'addressLocality': location.addressLocality,
				'addressRegion':   location.addressRegion,
				'postalCode':      location.postalCode,
				'addressCountry':  location.addressCountry
			},
			'geo': {
				'@type':     'GeoCoordinates',
				'latitude':  coordinates.lat,
				'longitude': coordinates.lng
			}
		},
		'performer': speakers.map(speaker => [
			{
				'@type':    'Person',
				'name':     `${speaker.firstname} ${speaker.lastname}`,
				'image':    speaker.src,
				'jobTitle': speaker.talkTitle
			}
		]),
		'eventStatus':     'EventScheduled',
		'typicalAgeRange': ageRange
	};
}
