import React, {
	ContextType,
	ChangeEvent,
	Component
} from 'react';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	Bind
} from '@flexis/ui/helpers';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import TabsNav, {
	TabsNavItem
} from '~/components/TabsNav';
import TicketForm, {
	TicketFormCheckbox,
	TicketFormFooter
} from '~/components/TicketForm';
import FormGroup from '~/components/FormGroup';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Link from '~/components/Link';
import {
	noAroundSpacesPattern
} from '../common';
import validate from './validate';
import {
	style,
	classes
} from './Buy.st.css';

export type IProps = ISectionProps;

const terms = [
	(
		<Link
			key='link'
			className={classes.link}
			target='_blank'
			to='/terms'
		/>
	)
];

interface IState {
	firstname: string;
	lastname: string;
	position: string;
	company: string;
	city: string;
	email: string;
}

export default class BuyContainer extends Component<IProps, IState> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	state = {
		firstname: '',
		lastname:  '',
		position:  '',
		company:   '',
		city:      '',
		email:     ''
	};

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			firstname,
			lastname,
			position,
			company,
			city,
			email
		} = this.state;
		const {
			context
		} = this;
		const __ = context.bind(tr);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<div
					className={classes.content}
				>
					<TabsNav>
						<TabsNavItem
							label={__`buy.oneTicket`}
							to='/buy'
						/>
					</TabsNav>
					<TicketForm
						onSubmit={this.onSubmit}
					>
						<FormGroup
							id='firstname'
							label={__`buy.firstname`}
						>
							<Input
								id='firstname'
								placeholder={__`buy.firstname`}
								name='firstname'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={firstname}
							/>
						</FormGroup>
						<FormGroup
							id='lastname'
							label={__`buy.lastname`}
						>
							<Input
								id='lastname'
								placeholder={__`buy.lastname`}
								name='lastname'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={lastname}
							/>
						</FormGroup>
						<FormGroup
							id='position'
							label={__`buy.position`}
						>
							<Input
								id='position'
								placeholder={__`buy.position`}
								name='position'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={position}
							/>
						</FormGroup>
						<FormGroup
							id='company'
							label={__`buy.company`}
						>
							<Input
								id='company'
								placeholder={__`buy.company`}
								name='company'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={company}
							/>
						</FormGroup>
						<FormGroup
							id='city'
							label={__`buy.city`}
						>
							<Input
								id='city'
								placeholder={__`buy.city`}
								name='city'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={city}
							/>
						</FormGroup>
						<FormGroup
							id='email'
							label={__`buy.email`}
							notice={__`buy.notice`}
						>
							<Input
								id='email'
								type='email'
								placeholder={__`buy.email`}
								name='email'
								pattern={noAroundSpacesPattern}
								onChange={this.onInputChange}
								value={email}
							/>
						</FormGroup>
						<TicketFormFooter>
							<Button
								variant='secondary'
								type='submit'
							>
								{__x`buy.buy`}
							</Button>
							<FormGroup
								flex={false}
							>
								<TicketFormCheckbox
									id='policy'
									required
								>
									{__x('buy.terms', terms)}
								</TicketFormCheckbox>
							</FormGroup>
						</TicketFormFooter>
					</TicketForm>
				</div>
			</Section>
		);
	}

	@Bind()
	private onInputChange(value: string, event: ChangeEvent<HTMLInputElement>) {

		const {
			name
		} = event.target;

		this.validate(event.target);

		this.setState<any>(() => ({
			[name]: value
		}));
	}

	private onSubmit(event: ChangeEvent<HTMLFormElement>) {

		event.preventDefault();

		console.log('submited');
	}

	private validate(input: HTMLInputElement) {

		const validityMessage = validate(input);

		input.setCustomValidity(validityMessage);
	}
}
