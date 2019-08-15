import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Checkbox from '~/components/Checkbox';
import Link from '~/components/Link';
import stylesheet from './Subscribe.st.css';

export type IProps = ISectionProps;

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
					Держите меня в курсе
				</h2>
				<form>
					<div
						{...stylesheet('row')}
					>
						<input
							{...stylesheet('input')}
							type='text'
							placeholder='Name or nickname'
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
}
