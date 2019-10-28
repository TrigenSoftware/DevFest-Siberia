import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import {
	style,
	classes
} from './Scholarship.st.css';
import Link from '~/components/Link';
import Button from '~/components/Button';
import {
	noSize
} from '~/components/common/unsetSize';
import ScholarshipImg from '~/icons/scholarship.svg';

export type IProps = ISectionProps;

export default class Scholarship extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<article>
					<h3
						className={classes.subtitle}
					>
						{__x`scholarship.subtitle`}
					</h3>
					<div
						className={classes.group}
					>
						<h2
							className={classes.title}
						>
							{__x`scholarship.title`}
						</h2>
						<Link
							to={__`scholarship.link`}
							disguised
						>
							<Button
								className={classes.button}
							>
								{__x`scholarship.button`}
							</Button>
						</Link>
					</div>
				</article>
				<ScholarshipImg
					className={classes.scholarshipImg}
					{...noSize}
				/>
			</Section>
		);
	}
}
