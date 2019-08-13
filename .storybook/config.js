import React from 'react';
import './injectTestIcon';
import {
	configure
} from '@trigen/scripts-preset-react-app/storybook/config';
import {
	addDecorator
} from '@storybook/react';
import '@flexis/ui/reboot.st.css';
import '../src/App/App.st.css';

addDecorator(story => (
	<div>
		{story()}
	</div>
));

configure(module);
