import {
	Record
} from 'immutable';

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
