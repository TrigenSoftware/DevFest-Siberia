import React, {
	ContextType,
	Component
} from 'react';
import SROnly from '@flexis/ui/components/SROnly';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import TimerCat from '~/components/TimerCat/loadable';
import {
	startTime,
	goodbyeTime
} from '~/data';
import goodbye from './goodbye.jpg';
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

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				{new Date() >= goodbyeTime
					? this.renderGoodbye()
					: this.renderTimer()}
			</Section>
		);
	}

	private renderTimer() {

		const locale = this.context.getLocale();

		return (
			<>
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
			</>
		);
	}

	private renderGoodbye() {

		const __ = this.context.bind(tr);

		return (
			<img
				className={style(classes.goodbye)}
				src={goodbye}
				title={__`main.goodbye`}
			/>
		);
	}
}
