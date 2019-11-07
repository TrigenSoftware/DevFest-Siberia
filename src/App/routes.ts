
export enum Routes {
	Index = '/',
	Team = '/team',
	Speakers = '/speakers',
	Partners = '/partners',
	CodeOfConduct = '/code-of-conduct',
	Buy = '/buy',
	Cabinet = '/cabinet',
	Schedule = '/schedule',
	TermsOfService = '/terms',
	Ru = '/ru'
}

let RoutesList: string[] = Object.values(Routes);

RoutesList = [
	...RoutesList,
	...RoutesList.reduce((routes, path) => {

		if (path !== Routes.Ru && path !== Routes.Index) {
			routes.push(`${Routes.Ru}${path}`);
		}

		return routes;
	}, [])
];

export {
	RoutesList
};
