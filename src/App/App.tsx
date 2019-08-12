import React, {
	ReactChild,
	PureComponent
} from 'react';
import {
	hot
} from 'react-hot-loader';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Weather from '~/containers/Weather/loadable';
import Todo from '~/containers/Todo/loadable';
import Navigator from '~/components/Navigator';
import stylesheet from './App.st.css';

export interface IProps {
	disableRouter?: boolean;
}

@hot(module)
export default class App extends PureComponent<IProps> {

	render() {
		return this.router(
			<div
				{...stylesheet('root')}
			>
				<Navigator>
					<Link to='/'>
						Home
					</Link>
					<Link to='/weather'>
						Weather
					</Link>
					<Link to='/todo'>
						Todo
					</Link>
				</Navigator>
				<hr/>
				<Route
					path='/'
					exact
					component={Home}
				/>
				<Route
					path='/weather'
					exact
					component={Weather}
				/>
				<Route
					path='/todo'
					exact
					component={Todo}
				/>
			</div>
		);
	}

	router(children: ReactChild) {

		const {
			disableRouter = false
		} = this.props;

		if (disableRouter) {
			return children;
		}

		return (
			<Router>
				{children}
			</Router>
		);
	}
}

function Home() {
	return (
		<h2>Home</h2>
	);
}
