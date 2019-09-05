
export enum Routes {
	Index = '/',
	Team = '/team',
	Speakers = '/speakers',
	Partners = '/partners',
	CodeOfConduct = '/code-of-conduct',
	Ru = '/ru'
}

let RoutesList: string[] = Object.values(Routes);

RoutesList = [
	...RoutesList,
	...RoutesList.reduce((routes, path) => {

		if (path !== Routes.Ru) {
			routes.push(`${Routes.Ru}${path}`);
		}

		return routes;
	}, [])
];

export {
	RoutesList
};
