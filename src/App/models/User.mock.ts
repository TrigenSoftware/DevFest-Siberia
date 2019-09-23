import faker from 'faker';
import User from './User';

const user = User({
	userId:    faker.random.number(),
	email: 	   faker.internet.email(),
	firstname: faker.name.firstName(),
	lastname:  faker.name.lastName(),
	company:   faker.lorem.word(),
	city:      faker.lorem.word()
});

export default function mockUser() {
	return {
		authKey: faker.random.word(),
		profile: user
	};
}
