import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import {
	style,
	classes
} from './TermsOfService.st.css';

export type IProps = ISectionProps;

export default class TermsOfService extends Component<IProps> {

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
				<h2>
					{__x`terms.title`}
				</h2>
				<article
					className={classes.article}
				>
					<div
						className={classes.group}
					>
						<h3>
							Согласие на обработку персональных данных
						</h3>
						<Link
							className={classes.link}
							to='/some-link'
						>
							Публичная оферта
						</Link>
					</div>
					<p>
						{__x`terms.rules`}
					</p>
					<p>
						{__x`terms.about`}
					</p>
				</article>
			</Section>
		);
	}
}
