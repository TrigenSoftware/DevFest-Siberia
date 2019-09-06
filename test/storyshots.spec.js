import initStoryshots, {
	getMatchOptions
} from '@trigen/scripts-plugin-storybook/jest/storyshots';

initStoryshots({
	customizePage(page) {
		return page.setViewport({
			width:  1920,
			height: 1080
		});
	},
	getGotoOptions() {
		return {
			waitUntil: 'networkidle0'
		};
	},
	getMatchOptions(info) {

		const options = getMatchOptions(info);
		const failureThreshold = 0.2;

		// switch (options.customSnapshotIdentifier) {

		// 	case 'ScrollArea__with-table':
		// 		failureThreshold = 5;
		// 		break;

		// 	case 'Table__with-rows':
		// 	case 'Table__with-order':
		// 		failureThreshold = 1;
		// 		break;

		// 	default:
		// }

		return {
			failureThresholdType: 'percent',
			failureThreshold,
			...options
		};
	}
});
