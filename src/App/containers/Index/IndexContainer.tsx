import React, {
	Component
} from 'react';
import Main from '~/blocks/Main';
import Facts from '~/blocks/Facts';
import Photos from '~/blocks/Photos';
import Subscribe from '~/blocks/Subscribe';
import Location from '~/blocks/Location';
import Partners from '~/blocks/Partners';

export default class IndexContainer extends Component {

	render() {
		return (
			<>
				<Main/>
				<Facts/>
				<Photos/>
				<Subscribe/>
				<Location/>
				<Partners/>
			</>
		);
	}
}
