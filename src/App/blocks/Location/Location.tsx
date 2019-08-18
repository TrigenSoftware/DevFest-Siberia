import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	Bind
} from '@flexis/ui/helpers';
import GoogleMapReact from 'google-map-react';
import {
	noSize
} from '~/components/common/unsetSize';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import PinIcon from '~/icons/pin.svg';
import {
	googleMaps
} from '~/data';
import stylesheet from './Location.st.css';

export type IProps = ISectionProps;

const address = [
	<b key='place'/>
];

export default class Location extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			props
		} = this;
		const locale = this.context.getLocale();

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<GoogleMapReact
					bootstrapURLKeys={{
						...googleMaps.keys,
						language: locale
					}}
					defaultCenter={googleMaps.center}
					defaultZoom={googleMaps.zoom}
					options={googleMaps.options}
					onGoogleApiLoaded={this.renderMarkers}
				/>
				<article
					{...stylesheet('info')}
				>
					<PinIcon
						{...stylesheet('icon')}
						{...noSize}
					/>
					<address>
						{__x('location.address', address)}
					</address>
				</article>
			</Section>
		);
	}

	@Bind()
	private renderMarkers({
		map,
		maps
	}: any) {
		new maps.Marker({
			position: googleMaps.center,
			map
		});
	}
}
