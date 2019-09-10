import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
import {
	events
} from '@flexis/ui/components/Input/Input.stories';
import LoginModal, {
	LoginModalForm,
	LoginModalTitle,
	LoginModalFooter,
	LoginModalLink
} from './';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Link from '../Link';
import Button from '../Button';

const stylableApi = `
Stylable API
---
- ::form
- ::title
- ::footer
- ::link
`;

storiesOf('Components|LoginModal', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with registration',
		() => (
			<LoginModal
				active
				centered
			>
				<LoginModalForm
					onSubmit={action('submit')}
				>
					<LoginModalTitle>
						SIGN IN
					</LoginModalTitle>
					<FormGroup
						label='E-mail:'
					>
						<Input
							{...events}
							placeholder='Enter e-mail'
						/>
					</FormGroup>
					<FormGroup
						label='Password:'
						notice={<Link>Forgot your password?</Link>}
					>
						<Input
							{...events}
							type='password'
							placeholder='Enter password'
						/>
					</FormGroup>
					<LoginModalFooter>
						<Link>
							Cancel
						</Link>
						<Button
							type='submit'
						>
							Let me in!
						</Button>
					</LoginModalFooter>
				</LoginModalForm>
				<LoginModalLink
					to='/some-link'
				>
					Don't have account? Buy ticker and join!
				</LoginModalLink>
			</LoginModal>
		)
	);
