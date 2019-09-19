import {
	Map
} from 'immutable';
import React, {
	ChangeEvent,
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	Bind,
	Debounce,
	omit
} from '@flexis/ui/helpers';
import {
	UserFieldsSpec
} from '~/models/User';
import FormGroup from '~/components/FormGroup';
import LoginModal, {
	IProps as ILoginModalProps,
	LoginModalForm,
	LoginModalTitle,
	LoginModalFooter,
	LoginModalLink
} from '~/components/LoginModal';
import Input from '~/components/Input';
import Link from '~/components/Link';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import {
	routeProps,
	deleteSearchParams,
	getErrorMessage
} from '../common';
import {
	noAroundSpacesPattern
} from '~/containers/common';
import validate from './validate';
import {
	classes
} from './Header.st.css';

type IHeaderLoginModalProps = Omit<ILoginModalProps, 'children'>;

export interface IProps extends IHeaderLoginModalProps, RouteComponentProps {
	errors: Map<any, Error>;
	login(email: string, password: string);
	clearErrors();
}

interface IState {
	email: string;
	password: string;
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class HeaderLoginModal extends Component<IProps, IState> {

	static contextType = I18nContext;

	static propTypes = {
		login:       PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired,
		errors:      PropTypes.any.isRequired
	};

	static getDerivedStateFromProps(
		{
			location: {
				search
			}
		}: IProps,
		{
			prevSearch
		}: IState
	) {

		if (prevSearch === search) {
			return null;
		}

		const searchWithParam = /[^\w]login=/.test(search);
		const nextState: Partial<IState> = {
			active:     searchWithParam,
			prevSearch: search
		};

		return nextState;
	}

	context!: ContextType<typeof I18nContext>;

	state = {
		email:      '',
		password:   '',
		active:     false,
		prevSearch: ''
	};

	render() {

		const {
			location: {
				search
			},
			...props
		} = this.props;
		const {
			email,
			password,
			active
		} = this.state;
		const {
			context
		} = this;
		const __ = context.bind(tr);

		return (
			<LoginModal
				{...omit(props, [
					...routeProps,
					'login',
					'errors',
					'clearErrors'
				])}
				onClose={this.onClose}
				active={active}
			>
				<LoginModalForm
					onSubmit={this.onSubmit}
				>
					<LoginModalTitle>
						{__x`login.title`}
					</LoginModalTitle>
					<FormGroup
						id='email'
						label={__`login.email`}
					>
						<Input
							{...UserFieldsSpec.email}
							id='email'
							placeholder={__`login.emailPlaceholder`}
							name='email'
							onChange={this.onInputChange}
							value={email}
						/>
					</FormGroup>
					<FormGroup
						id='password'
						label={__`login.password`}
					>
						<Input
							{...UserFieldsSpec.password}
							id='password'
							placeholder={__`login.passwordPlaceholder`}
							name='password'
							onChange={this.onInputChange}
							value={password}
						/>
					</FormGroup>
					<div
						className={classes.error}
					>
						{this.error()}
					</div>
					<LoginModalFooter>
						<Link
							to={deleteSearchParams(search, 'login')}
						>
							{__x`login.cancel`}
						</Link>
						<Button
							type='submit'
						>
							{__x`login.submit`}
						</Button>
					</LoginModalFooter>
				</LoginModalForm>
				<LoginModalLink
					to='/buy'
				>
					{__x`login.link`}
				</LoginModalLink>
			</LoginModal>
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
	private onClose() {
		this.setState(() => ({
			active: false
		}), this.goBack);
	}

	@Debounce(transitionDuration)
	private goBack() {

		const {
			props
		} = this;
		const {
			history,
			location: {
				search
			}
		} = props;

		history.push({
			search: deleteSearchParams(search, 'login')
		});
	}

	@Bind()
	private onSubmit(event: ChangeEvent<HTMLFormElement>) {

		event.preventDefault();

		this.login();
	}

	private validate(input: HTMLInputElement) {

		const validityMessage = validate(input);

		input.setCustomValidity(validityMessage);
	}

	private async login() {

		const {
			login,
			clearErrors
		} = this.props;
		const {
			email,
			password
		} = this.state;

		const isLogged = await login(email, password);

		if (isLogged) {
			clearErrors();
			this.setState(() => ({
				active: false
			}), this.goBack);
		}
	}

	private error() {

		const {
			login,
			errors
		} = this.props;
		const error = errors.get(login);
		const message = getErrorMessage(error);

		return message;
	}
}

export default withRouter(HeaderLoginModal);
