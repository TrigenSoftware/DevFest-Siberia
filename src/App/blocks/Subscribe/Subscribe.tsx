import React, {
	ChangeEvent,
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
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

const policy = [
	<Link {...stylesheet('link')} key='link' to='/policy'/>
];

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
					{__x`subscribe.title`}
				</h2>
				<form
					action='//gdg.us13.list-manage.com/subscribe/post?u=73a04239d206286c61645aa1c&amp;id=c08f8ec1f1'
					method='post'
					target='_blank'
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
							name='EMAIL'
							placeholder='Email'
							onChange={this.onInputChange}
							value={email}
						/>
						<Button
							{...stylesheet('button')}
							variant='secondary'
						>
							{__x`subscribe.subscribe`}
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
							{__x('subscribe.policy', policy)}
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
}
