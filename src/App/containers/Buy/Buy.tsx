import React, {
	ChangeEvent,
	Component
} from 'react';
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
	style,
	classes
} from './Buy.st.css';

export type IProps = ISectionProps;

interface IState {
	firstname: string;
	lastname: string;
	position: string;
	company: string;
	city: string;
	email: string;
}

export default class BuyContainer extends Component<IProps, IState> {

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
							label='1 Билет – 5000₽'
							to='/'
						/>
					</TabsNav>
					<TicketForm
						onSubmit={this.onSubmit}
					>
						<FormGroup
							id='firstname'
							label='Имя'
						>
							<Input
								id='firstname'
								placeholder='Имя'
								name='firstname'
								onChange={this.onInputChange}
								value={firstname}
							/>
						</FormGroup>
						<FormGroup
							id='lastname'
							label='Фамилия'
						>
							<Input
								id='lastname'
								placeholder='Фамилия'
								name='lastname'
								onChange={this.onInputChange}
								value={lastname}
							/>
						</FormGroup>
						<FormGroup
							id='position'
							label='Должность'
						>
							<Input
								id='position'
								placeholder='Должность'
								name='position'
								onChange={this.onInputChange}
								value={position}
							/>
						</FormGroup>
						<FormGroup
							id='company'
							label='Компания'
						>
							<Input
								id='company'
								placeholder='Компания'
								name='company'
								onChange={this.onInputChange}
								value={company}
							/>
						</FormGroup>
						<FormGroup
							id='city'
							label='Город'
						>
							<Input
								id='city'
								placeholder='Город'
								name='city'
								onChange={this.onInputChange}
								value={city}
							/>
						</FormGroup>
						<FormGroup
							id='email'
							label='Почта'
							notice='Сюда мы пришлем билет : )'
						>
							<Input
								id='email'
								type='email'
								placeholder='Почта'
								name='email'
								onChange={this.onInputChange}
								value={email}
							/>
						</FormGroup>
						<TicketFormFooter>
							<Button
								variant='secondary'
								type='submit'
							>
								Купить
							</Button>
							<FormGroup
								flex={false}
							>
								<TicketFormCheckbox
									id='policy'
									required
								>
									Accept <Link to='/terms'>Terms</Link>
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

		this.setState<any>(() => ({
			[name]: value
		}));
	}

	private onSubmit(event: ChangeEvent<HTMLFormElement>) {

		event.preventDefault();

		console.log('submited');
	}
}
