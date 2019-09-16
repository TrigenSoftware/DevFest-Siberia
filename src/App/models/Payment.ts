import {
	Record
} from 'immutable';

export interface IPaymentProps {
	redirectUrl: string;
}

type Payment = ReturnType<Record.Factory<IPaymentProps>>;

const Payment = Record<IPaymentProps>({
	redirectUrl: ''
});

export default Payment;
