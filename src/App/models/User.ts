import {
	Record
} from 'immutable';
import {
	noAroundSpacesPattern
} from '~/containers/common';

export interface IUserProps {
	userId: number;
	email: string;
	firstname: string;
	lastname: string;
	company: string;
	city: string;
}

type User = ReturnType<Record.Factory<IUserProps>>;

const User = Record<IUserProps>({
	userId:    -1,
	email:     '',
	firstname: '',
	lastname:  '',
	company:   '',
	city:      ''
});

export default User;

export const UserFieldsSpec = {
	firstname: {
		required: true,
		pattern:  noAroundSpacesPattern
	},
	lastname: {
		required: true,
		pattern:  noAroundSpacesPattern
	},
	position: {
		required: true,
		pattern:  noAroundSpacesPattern
	},
	company: {
		required: true,
		pattern:  noAroundSpacesPattern
	},
	city: {
		required: true,
		pattern:  noAroundSpacesPattern
	},
	email: {
		type:     'email',
		required: true
	},
	password: {
		type:      'password',
		required:  true,
		pattern:   noAroundSpacesPattern
	}
};
