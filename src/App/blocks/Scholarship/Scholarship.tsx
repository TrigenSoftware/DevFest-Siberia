import React, {
	Component
} from 'react';
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
				<article>
					<h3
						className={classes.subtitle}
					>
						Also on this year, you have a chance get
					</h3>
					<div
						className={classes.group}
					>
						<h2
							className={classes.title}
						>
							DevFest Siberia 2019 Diversity Scholarship
						</h2>
						<Link
							to='/'
							disguised
						>
							<Button
								className={classes.button}
							>
								Get It
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
