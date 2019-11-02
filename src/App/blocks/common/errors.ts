
export function getErrorMessage(error: any) {
	return error
		? String(
			error.response
				? error.response.data.message
				: error.message
		).replace(/^(.)/, _ => _.toUpperCase())
		: '';
}
