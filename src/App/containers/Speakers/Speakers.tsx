import React, {
	ContextType,
	Component
} from 'react';
import {
	Route
} from 'react-router-dom';
import {
	I18nContext
} from 'i18n-for-react';
import {
	getLocalizedPath
} from '~/services/i18n';
import Speakers from '~/blocks/Speakers';
import SpeakerModal from './SpeakerModal';

export default class SpeakersContainer extends Component {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {
		return (
			<>
				<Speakers/>
				<Route
					path={getLocalizedPath(this.context, '/speakers?id=:id')}
					component={SpeakerModal}
				/>
			</>
		);
	}
}
