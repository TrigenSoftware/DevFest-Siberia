import React, {
	ContextType,
	Component
} from 'react';
import SROnly from '@flexis/ui/components/SROnly';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import TimerCat from '~/components/TimerCat/loadable';
import {
	startTime
} from '~/data';
import {
	style,
	classes
} from './Main.st.css';

export type IProps = ISectionProps;

const dates = [
	<small key='start'/>,
	<span key='-'/>,
	<small key='end'/>
];

export default class Main extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const locale = this.context.getLocale();

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<article
					className={classes.info}
				>
					<SROnly>
						<h1>
							{__x`main.title`}
						</h1>
					</SROnly>
					<h2>
						<address>
							{__x`main.address`}
						</address>
					</h2>
					<h2>
						<time>
							{__x('main.dates', dates)}
						</time>
					</h2>
					<h2>
						<time>
							{__x`main.year`}
						</time>
					</h2>
				</article>
				<TimerCat
					className={classes.svg}
					aria-hidden
					locale={locale}
					start={startTime}
				/>
			</Section>
		);
	}
}
