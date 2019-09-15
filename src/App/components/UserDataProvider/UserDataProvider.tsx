import {
	createContext
} from 'react';

function buy() {
	console.log('buy');
}

function login(email: string, password: string) {

	console.log(email);

	console.log(password);

	console.log('login');
}

function fetchOrders() {
	console.log('fetchOrders');
}

function saveToken() {
	console.log('saveToken');
}

function getToken() {
	console.log('getToken');
}

interface IUserDataContext {
	buy();
	login(email: string, password: string);
	fetchOrders();
	saveToken();
	getToken();
}

export default createContext<IUserDataContext>({
	buy,
	login,
	fetchOrders,
	saveToken,
	getToken
});
