
export const routeProps = [
	'history',
	'location',
	'match',
	'staticContext'
];

function formatSearch(search: string) {

	const trimmed = search.trim();

	return trimmed ? `?${trimmed}` : '';
}

export function addSearchParams(search: string, params: Record<string, any>) {

	const searchParams = new URLSearchParams(search);

	Object.entries(params).forEach(([key, value]) => {

		let strval = '';

		switch (typeof value) {

			case 'string':
				strval = value;
				break;

			case 'number':
			case 'boolean':
				strval = String(value);
				break;

			default:
				strval = JSON.stringify(value);
		}

		searchParams.set(key, strval);
	});

	return formatSearch(searchParams.toString());
}
