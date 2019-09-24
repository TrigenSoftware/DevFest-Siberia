
export function getErrorMessage(error: any): string {
	return error
		? error.response
			? error.response.data.message
			: error.message
		: '';
}
