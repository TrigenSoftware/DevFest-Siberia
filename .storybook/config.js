import React from 'react';
import {
	configure
} from '@trigen/scripts-preset-react-app/storybook/config';
import {
	addDecorator
} from '@storybook/react';
import stylesheet from '@flexis/ui/reboot.st.css';

addDecorator(story => (
	<div {...stylesheet('root')}>
		{story()}
	</div>
));

configure(module);
