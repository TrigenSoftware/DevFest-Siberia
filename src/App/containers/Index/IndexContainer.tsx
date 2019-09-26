import React, {
	Component
} from 'react';
import Main from '~/blocks/Main';
import SpeakersPromo from '~/blocks/SpeakersPromo';
import Facts from '~/blocks/Facts';
import Photos from '~/blocks/Photos';
import Subscribe from '~/blocks/Subscribe';
import Location from '~/blocks/Location';
import Tickets from '~/blocks/Tickets';
import Partners from '~/blocks/Partners';

export default class IndexContainer extends Component {

	render() {
		return (
			<>
				<Main/>
				<Facts/>
				<SpeakersPromo/>
				<Photos/>
				<Subscribe/>
				<Location/>
				<Tickets/>
				<Partners/>
			</>
		);
	}
}
