import React, {
	FormHTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './LoginModal.st.css';

export type ILoginModalFormProps = FormHTMLAttributes<HTMLFormElement>;

export class LoginModalForm extends Component<ILoginModalFormProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<form
				{...props}
				className={classes.form}
			>
				{children}
			</form>
		);
	}
}
