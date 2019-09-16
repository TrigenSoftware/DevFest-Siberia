import client from './client';

export async function buy() {

	console.log('buy');
}

export async function login(email: string, password: string) {

	const response = await client.post('auth/login', {
		email,
		password
	});

	return response.data;
}

export async function fetchOrders() {

	const response = await client.get('api/profile/orders');

	return response.data;
}

export async function saveToken(email: string, password: string) {

	const response = await getToken(email, password);

	localStorage.setItem('authKey', response.data);
}

export async function getToken(email: string, password: string) {

	const response = await login(email, password);

	const authKey = response.data.authKey;

	return authKey;
}
