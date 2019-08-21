import React, {
	Component
} from 'react';
import Main from '~/blocks/Main';
import Facts from '~/blocks/Facts';
import Photos from '~/blocks/Photos';
import Location from '~/blocks/Location';
import Partners from '~/blocks/Partners';

export default class IndexContainer extends Component {

	render() {

		return (
			<>
				<Main/>
				<Facts/>
				<Photos/>
				<Location/>
				<Partners/>
			</>
		);
	}
}
