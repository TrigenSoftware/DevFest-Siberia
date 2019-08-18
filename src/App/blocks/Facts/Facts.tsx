import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import stylesheet from './Facts.st.css';

export type IProps = ISectionProps;

const numbers = [
	<b key='number'/>,
	<div key='label'/>
];

export default class Facts extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h3
					{...stylesheet('title', {
						alt: true
					})}
				>
					{__x`facts.title`}
				</h3>
				<article
					{...stylesheet('article')}
				>
					<h4>
						{__x`facts.topics`}
					</h4>
					<p>
						{__x`facts.topicsDescription`}
					</p>
				</article>
				<article
					{...stylesheet('article')}
				>
					<h4>
						{__x`facts.workshops`}
					</h4>
					<p>
						{__x`facts.workshopsDescription`}
					</p>
				</article>
				<h2
					{...stylesheet('title')}
				>
					{__x`facts.also`}
				</h2>
				<ul
					{...stylesheet('numbers')}
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
