import initStoryshots from '@trigen/scripts-plugin-storybook/jest/storyshots';
import initRouteshots from '@trigen/scripts-preset-react-app/jest/routeshots';
import {
	RoutesList
} from '../src/App/routes';

if (process.platform === 'darwin') {

	jest.setTimeout(30000);

	const config = {
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
	};

	initStoryshots(config);

	initRouteshots([
		...RoutesList,
		'/speakers?type=all',
		'/speakers?id=LeonidKalneus',
		'/ru/speakers?type=all',
		'/ru/speakers?id=LeonidKalneus',
		'/partners?type=all',
		'/ru/partners?type=all'
	], config);

} else {
	it('should skip storyshots', () => {});
}
