
export default function getPath(context, path: string) {

	if (!context) {
		return path;
	}

	const locale = context.getLocale();

	return locale === 'en'
		? path
		: `/ru${path}`;
}
