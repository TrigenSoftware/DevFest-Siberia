import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext
} from 'i18n-for-react';
import TermsOfService from '~/blocks/TermsOfService';

export default class TermsOfServiceContainer extends Component {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {
		return (
			<TermsOfService/>
		);
	}
}
