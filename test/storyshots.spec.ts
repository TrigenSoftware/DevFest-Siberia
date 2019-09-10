import initStoryshots from '@trigen/scripts-plugin-storybook/jest/storyshots';

jest.setTimeout(5000);

if (process.platform === 'darwin') {
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
		}
	});
} else {
	it('should skip storyshots', () => {});
}
