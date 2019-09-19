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
import {
	style,
	classes
} from './Subscribe.st.css';

export type IProps = ISectionProps;

const policy = [
	(
		<Link
			key='link'
			className={classes.link}
			to='/policy'
		/>
	)
];

export default class Subscribe extends Component<IProps> {

	render() {

		const {
			className,
			...props
		} = this.props;

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2
					className={classes.title}
				>
					{__x`subscribe.title`}
				</h2>
				<form
					action='//gdg.us13.list-manage.com/subscribe/post?u=73a04239d206286c61645aa1c&amp;id=c08f8ec1f1'
					method='post'
					target='_blank'
				>
					<div
						className={classes.group}
					>
						<SROnly>
							<label htmlFor='emailSubscribe'>Email</label>
						</SROnly>
						<input
							className={classes.input}
							required
							id='emailSubscribe'
							type='email'
							name='EMAIL'
							placeholder='Email'
						/>
						<Button
							className={classes.button}
							variant='secondary'
						>
							{__x`subscribe.button`}
						</Button>
					</div>
					<footer
						className={classes.footer}
					>
						<Checkbox
							className={classes.checkbox}
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
