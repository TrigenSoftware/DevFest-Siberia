import {
	Record
} from 'immutable';

export interface IProductProps {
	id: string;
	price: number;
	currency: string;
	name: string;
	description: string;
}

type Product = ReturnType<Record.Factory<IProductProps>>;

const Product = Record<IProductProps>({
	id:         '',
	price:       0,
	currency:    '',
	name:        '',
	description: ''
});

export default Product;
