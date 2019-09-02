
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

export function getSpeakers(context, type?) {

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

export function getTalkTypes(context) {

	const {
		speakers: {
			nav
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return nav;
}

export function getPartners(context, type?) {

	const {
		partners: {
			partners
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	if (type && type !== 'all') {
		return partners.reduce((partners, { items }) => {
			items.map((item) => {
				if (item.type === type) {
					partners.push(item);
				}
			});
			return partners;
		}, []);
	}

	return partners.reduce((partners, { items }) => {
		items.forEach((item) => {
			partners.push(item);
		});
		return partners;
	}, []);
}

export function getPartnersTypes(context) {

	const {
		partners: {
			nav
		}
	} = context.getCatalog(
		context.getLocale()
	) as any;

	return nav;
}
