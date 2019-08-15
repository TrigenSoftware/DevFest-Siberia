import faker from 'faker';
import {
	ContactLinkTypeVariant
} from '~/components/ContactLink';
import Contact from './Contact';

export default function mockContact() {
	return Contact({
		type: faker.random.arrayElement([
			ContactLinkTypeVariant.Telegram,
			ContactLinkTypeVariant.Email,
			ContactLinkTypeVariant.Twitter,
			ContactLinkTypeVariant.Vk,
			ContactLinkTypeVariant.Site
		]),
		link: faker.lorem.word()
	});
}
