import {
	I18nConfig
} from 'i18n-for-react';

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

	if (type && type !== 'all') {
		return speakers.filter(speaker => speaker.type === type);
	}

	return speakers;
}

/**
 * Get speaker by id.
 */
export function getSpeaker(context: I18nConfig, id: string): any {

	const {
		speakers: {
			speakers
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return speakers.find(speaker => speaker.id === id);
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

	const {
		partners: {
			partners
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

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
