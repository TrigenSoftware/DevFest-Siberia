import {
	Record
} from 'immutable';
import {
	ContactLinkTypeVariant
} from '~/components/ContactLink';

export interface IContactProps {
	type: ContactLinkTypeVariant;
	link: string;
}

type Contact = ReturnType<Record.Factory<IContactProps>>;

const Contact = Record<IContactProps>({
	type: null,
	link: ''
});

export default Contact;
