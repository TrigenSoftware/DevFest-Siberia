import React from 'react';
import {
	configure
} from '@trigen/scripts-preset-react-app/storybook/config';
import {
	addDecorator
} from '@storybook/react';
import reboot from '@flexis/ui/reboot.st.css';
import stylesheet from '../src/App/App.st.css';

addDecorator(story => (
	<div {...stylesheet('root', {}, reboot('root'))}>
		{story()}
	</div>
));

configure(module);
