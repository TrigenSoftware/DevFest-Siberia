import {
	Record
} from 'immutable';

export interface IProductProps {
	ref: string;
	price: number;
	currency: string;
	name: string;
	description: string;
}

type Product = ReturnType<Record.Factory<IProductProps>>;

const Product = Record<IProductProps>({
	ref:         '',
	price:       0,
	currency:    '',
	name:        '',
	description: ''
});

export default Product;
