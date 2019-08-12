import faker from 'faker';

export function getFakeData() {
	return {
		id:   faker.random.uuid(),
		text: faker.lorem.words()
	};
}
