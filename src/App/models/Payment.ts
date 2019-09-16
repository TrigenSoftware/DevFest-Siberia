import {
	Record
} from 'immutable';

export interface IPaymentProps {
	paymentDetails: object;
}

type Payment = ReturnType<Record.Factory<IPaymentProps>>;

const Payment = Record<IPaymentProps>({
	paymentDetails: null
});

export default Payment;
