import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import SROnly from '@flexis/ui/components/SROnly';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Link from '~/components/Link';
import stylesheet from './Subscribe.st.css';

export type IProps = ISectionProps;

const policy = [
	<Link {...stylesheet('link')} key='link' to='/policy'/>
];

export default class Subscribe extends Component<IProps> {

	render() {

		const {
			props
		} = this;

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
						/>
						<Button
							{...stylesheet('button')}
							variant='secondary'
						>
							{__x`subscribe.button`}
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
}
