import {
	Record
} from 'immutable';

export interface IUserProps {
	userId: number;
	email: string;
	firstName: string;
	lastName: string;
	company: string;
	city: string;
}

type User = ReturnType<Record.Factory<IUserProps>>;

const User = Record<IUserProps>({
	userId:    null,
	email:     null,
	firstName: null,
	lastName:  null,
	company:   null,
	city:      null
});

export default User;
