import React, {
	ChangeEvent,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import SROnly from '@flexis/ui/components/SROnly';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Link from '~/components/Link';
import stylesheet from './Subscribe.st.css';

export type IProps = ISectionProps;

interface IState {
	email: string;
}

export default class Subscribe extends Component<IProps, IState> {

	state = {
		email: ''
	};

	render() {

		const {
			props
		} = this;
		const {
			email
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
						<SROnly>
							<label htmlFor='email'>Email</label>
						</SROnly>
						<input
							{...stylesheet('input')}
							required
							id='email'
							type='email'
							name='email'
							placeholder='Email'
							onChange={this.onInputChange}
							value={email}
						/>
						<Button
							{...stylesheet('button')}
							variant='secondary'
						>
							Подписаться
						</Button>
					</div>
					<footer
						{...stylesheet('footer')}
					>
						<Checkbox
							{...stylesheet('checkbox')}
							required
							id='policy'
							name='policy'
						/>
						<label
							htmlFor='policy'
						>
							I agree to accept{' '}
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

		console.log('submited');
	}
}
