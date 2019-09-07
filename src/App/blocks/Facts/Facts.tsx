import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import {
	style,
	classes
} from './Facts.st.css';

export type IProps = ISectionProps;

const numbers = [
	<b key='number'/>,
	<div key='label'/>
];

export default class Facts extends Component<IProps> {

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
				<h3
					className={style(classes.title, {
						alt: true
					})}
				>
					{__x`facts.title`}
				</h3>
				<article
					className={classes.article}
				>
					<h4>
						{__x`facts.topics`}
					</h4>
					<p>
						{__x`facts.topicsDescription`}
					</p>
				</article>
				<article
					className={classes.article}
				>
					<h4>
						{__x`facts.workshops`}
					</h4>
					<p>
						{__x`facts.workshopsDescription`}
					</p>
				</article>
				<h2
					className={classes.title}
				>
					{__x`facts.also`}
				</h2>
				<ul
					className={classes.numbers}
				>
					<li>
						{__x('facts.attendees', numbers)}
					</li>
					<li>
						{__x('facts.days', numbers)}
					</li>
					<li>
						{__x('facts.speakers', numbers)}
					</li>
					<li>
						{__x('facts.tracks', numbers)}
					</li>
				</ul>
			</Section>
		);
	}
}
