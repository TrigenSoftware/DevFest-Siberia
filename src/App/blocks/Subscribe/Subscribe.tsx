import React, {
	ChangeEvent,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Checkbox from '~/components/Checkbox';
import Link from '~/components/Link';
import stylesheet from './Subscribe.st.css';

export type IProps = ISectionProps;

interface IState {
	email: string;
	checked: boolean;
}

export default class Subscribe extends Component<IProps, IState> {

	state = {
		email:   '',
		checked: false
	};

	render() {

		const {
			props
		} = this;
		const {
			email,
			checked
		} = this.state;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2
					{...stylesheet('title')}
				>
					Держите меня в курсе
				</h2>
				<form
					onSubmit={this.onSubmit}
				>
					<div
						{...stylesheet('group')}
					>
						<input
							{...stylesheet('input')}
							required
							type='email'
							name='email'
							placeholder='Name or nickname'
							onChange={this.onInputChange}
							value={email}
						/>
						<button
							{...stylesheet('button')}
						>
							Подписаться
						</button>
					</div>
					<footer
						{...stylesheet('footer')}
					>
						<Checkbox
							{...stylesheet('checkbox')}
							id='policy'
							onChange={this.onCheckboxChange}
							checked={checked}
						/>
						<label
							htmlFor='policy'
						>
							I agree to accept {' '}
							<Link
								{...stylesheet('link')}
								to='/policy'
							>
								The Privacy Policy
							</Link>
						</label>
					</footer>
				</form>
			</Section>
		);
	}

	@Bind()
	private onCheckboxChange() {
		this.setState(({
			checked
		}) => ({
			checked: !checked
		}));
	}

	@Bind()
	private onInputChange(event: ChangeEvent<HTMLInputElement>) {

		const {
			value
		} = event.target;

		this.setState(() => ({
			email: value
		}));
	}

	@Bind()
	private onSubmit(event: ChangeEvent<HTMLFormElement>) {

		event.preventDefault();

		const {
			checked
		} = this.state;

		if (checked) {
			console.log('submited');
		}
	}
}
