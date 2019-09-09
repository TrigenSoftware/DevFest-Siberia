
export const routeProps = [
	'history',
	'location',
	'match',
	'staticContext'
];

function matchSomePattern(target: string, patterns: (string | RegExp)[]) {
	return patterns.some(_ => (
		_ instanceof RegExp
			? _.test(target)
			: _ === target
	));
}

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

			case 'object':
				break;

			default:
				strval = JSON.stringify(value);
		}

		if (strval) {
			searchParams.set(key, strval);
		}
	});

	return formatSearch(searchParams.toString());
}

export function deleteSearchParams(search: string, ...queryParams: (string | RegExp)[]) {

	const searchParams = new URLSearchParams(search);
	const keys: string[] = Array.from((searchParams as any).keys());

	keys.forEach((key) => {

		if (matchSomePattern(key, queryParams)) {
			searchParams.delete(key);
		}
	});

	return formatSearch(searchParams.toString());
}
