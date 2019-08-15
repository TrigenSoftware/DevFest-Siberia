import React, {
	Component
} from 'react';
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

export default class Location extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<GoogleMapReact
					bootstrapURLKeys={googleMaps.keys}
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
						<b>Технопарк Новосибирского Академгородка</b><br/>
						ул. Николаева д. 12, г. Новосибирск
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
