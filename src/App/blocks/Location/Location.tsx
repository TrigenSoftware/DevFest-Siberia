import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import GoogleMapReact from 'google-map-react';
import Section from '~/components/Section';
import {
	googleMaps
} from '~/data';
import stylesheet from './Location.st.css';

export type IProps = HTMLAttributes<HTMLElement>;

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
