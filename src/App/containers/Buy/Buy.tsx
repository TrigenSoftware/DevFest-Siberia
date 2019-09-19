import React, {
	ContextType,
	ChangeEvent,
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	getLocaleFromPath
} from '~/services/i18n';
import {
	Bind,
	omit
} from '@flexis/ui/helpers';
import {
	UserFieldsSpec
} from '~/models/User';
import {
	routeProps,
	getErrorMessage
} from '~/blocks/common';
import Section from '~/components/Section';
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
	IProps,
	IState
} from './types';
import validate from './validate';
import {
	style,
	classes
} from './Buy.st.css';

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

export class BuyContainer extends Component<IProps, IState> {

	static contextType = I18nContext;

	static propTypes = {
		buy:    PropTypes.func.isRequired,
		errors: PropTypes.any.isRequired
	};

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
				{...omit(props, [
					...routeProps,
					'buy'
				])}
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
								{...UserFieldsSpec.firstname}
								id='firstname'
								placeholder={__`buy.firstname`}
								name='firstname'
								onChange={this.onInputChange}
								value={firstname}
							/>
						</FormGroup>
						<FormGroup
							id='lastname'
							label={__`buy.lastname`}
						>
							<Input
								{...UserFieldsSpec.lastname}
								id='lastname'
								placeholder={__`buy.lastname`}
								name='lastname'
								onChange={this.onInputChange}
								value={lastname}
							/>
						</FormGroup>
						<FormGroup
							id='position'
							label={__`buy.position`}
						>
							<Input
								{...UserFieldsSpec.position}
								id='position'
								placeholder={__`buy.position`}
								name='position'
								onChange={this.onInputChange}
								value={position}
							/>
						</FormGroup>
						<FormGroup
							id='company'
							label={__`buy.company`}
						>
							<Input
								{...UserFieldsSpec.company}
								id='company'
								placeholder={__`buy.company`}
								name='company'
								onChange={this.onInputChange}
								value={company}
							/>
						</FormGroup>
						<FormGroup
							id='city'
							label={__`buy.city`}
						>
							<Input
								{...UserFieldsSpec.city}
								id='city'
								placeholder={__`buy.city`}
								name='city'
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
								{...UserFieldsSpec.email}
								id='email'
								placeholder={__`buy.email`}
								name='email'
								onChange={this.onInputChange}
								value={email}
							/>
						</FormGroup>
						<div
							className={classes.error}
						>
							{this.error()}
						</div>
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

	@Bind()
	private async onSubmit(event: ChangeEvent<HTMLFormElement>) {

		event.preventDefault();

		const {
			buy
		} = this.props;
		const userData = this.getUserData();

		buy(userData);
	}

	private validate(input: HTMLInputElement) {

		const validityMessage = validate(input);

		input.setCustomValidity(validityMessage);
	}

	private getUserData() {

		const {
			firstname,
			lastname,
			position,
			company,
			city,
			email
		} = this.state;
		const locale = getLocaleFromPath(location.pathname);
		const userData = {
			email,
			firstName: firstname,
			lastName: lastname,
			company,
			position,
			city,
			termsAccepted: true,
			paymentRequest: {
				locale,
				products: [
					{
						productId: 'ticket'
					}
				],
				promocode: ''
			}
		};

		return userData;
	}

	private error() {

		const {
			buy,
			errors
		} = this.props;
		const error = errors.get(buy);
		const message = getErrorMessage(error);

		return message;
	}
}

export default withRouter(BuyContainer);
