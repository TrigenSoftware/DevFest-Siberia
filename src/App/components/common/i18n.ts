
export function getPath(context, path: string) {

	if (!context) {
		return path;
	}

	const locale = context.getLocale();

	return locale === 'en'
		? path
		: `/ru${path}`;
}

export function getTeam(context) {

	const {
		team: {
			team
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return team;
}

export function getSpeakers(context) {

	const {
		speakers: {
			speakers
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return speakers;
}

export function getPartners(context) {

	const {
		partners: {
			partners
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return partners;
}

export function getSpeaker(context, id) {

	const {
		speakers: {
			speakers
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return speakers.find(speaker => speaker.id === id);
}
