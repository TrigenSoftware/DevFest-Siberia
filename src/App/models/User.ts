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
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'given-name'
	},
	lastname: {
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'family-name'
	},
	position: {
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'organization-title'
	},
	company: {
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'organization'
	},
	city: {
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'address-level2'
	},
	email: {
		type:         'email',
		required:     true,
		autoComplete: 'email'
	},
	password: {
		type:         'password',
		required:     true,
		pattern:      noAroundSpacesPattern,
		autoComplete: 'current-password'
	},
	promocode: {
		pattern: noAroundSpacesPattern
	}
};
