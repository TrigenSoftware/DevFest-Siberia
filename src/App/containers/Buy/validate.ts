import {
	createValidator,
	checkPattern
} from '../common';

export const noAroundSpacesPattern = '\\S.*\\S';

export default createValidator([
	checkPattern
]);
