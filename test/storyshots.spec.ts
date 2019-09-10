import initStoryshots from '@trigen/scripts-plugin-storybook/jest/storyshots';
import {
	toMatchImageSnapshot
} from 'jest-image-snapshot';
import {
	RoutesList
} from '../src/App/routes';

declare global {
	namespace jest {
		// tslint:disable-next-line: interface-name
		interface Matchers<R> {
			toMatchImageSnapshot(): R;
		}
	}
	const browser: any;
}

if (process.platform === 'darwin') {

	jest.setTimeout(30000);
	expect.extend({ toMatchImageSnapshot });

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

	describe.skip('Pages', () => {

		RoutesList.unshift('?noop');
		RoutesList.push(
			'/speakers?type=all',
			'/speakers?id=LeonidKalneus',
			'/ru/speakers?type=all',
			'/ru/speakers?id=LeonidKalneus',
			'/partners?type=all',
			'/ru/partners?type=all'
		);

		let page = null;

		beforeAll(async () => {
			page = await browser.newPage();
			await config.customizePage(page);
		});

		afterAll(() => {

			if (page) {
				return page.close();
			}
		});

		RoutesList.forEach((path) => {

			it(path, async () => {

				await page.goto(`http://localhost:3000${path}`, config.getGotoOptions());

				const image = await page.screenshot({
					fullPage: true
				});

				expect(image).toMatchImageSnapshot();
			});
		});
	});

} else {
	it('should skip storyshots', () => {});
}
