import React, {
	HTMLAttributes,
	Component
} from 'react';
import SROnly from '@flexis/ui/components/SROnly';
import Section from '~/components/Section';
import TimerCat from '~/components/TimerCat';
import {
	startTime
} from '~/data';
import stylesheet from './Main.st.css';

export type IProps = HTMLAttributes<HTMLElement>;

export default class Main extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<article
					{...stylesheet('info')}
				>
					<SROnly>
						<h1>
							DevFest Siberia 2019
						</h1>
					</SROnly>
					<h2>
						<address>
							Новосибирск
						</address>
					</h2>
					<h2>
						<time>
							29<small>ноября</small><span>-</span>01<small>декабря</small>
						</time>
					</h2>
					<h2>
						<time>
							2019
						</time>
					</h2>
				</article>
				<TimerCat
					{...stylesheet('svg')}
					aria-hidden
					locale='ru'
					start={startTime}
				/>
			</Section>
		);
	}
}
