import React, {
	ReactChild,
	Component
} from 'react';
// import {
// 	hot
// } from 'react-hot-loader';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Header from '~/blocks/Header';
import Main from '~/blocks/Main';
import Facts from '~/blocks/Facts';
import Location from '~/blocks/Location';
import Partners from '~/blocks/Partners';
import Team from '~/blocks/Team';
import Speakers from '~/blocks/Speakers';
import Footer from '~/blocks/Footer';
import '@flexis/ui/reboot.st.css';
import './App.st.css';

export interface IProps {
	disableRouter?: boolean;
}

// @hot(module)
export default class App extends Component<IProps> {

	render() {
		return this.router(
			<>
				<Header/>
				<Route
					path='/'
					exact
					render={this.home}
				/>
				<Route
					path='/team'
					exact
					component={Team}
				/>
				<Route
					path='/speakers'
					exact
					component={Speakers}
				/>
				<Footer/>
			</>
		);
	}

	private router(children: ReactChild) {

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

	private home() {
		return (
			<>
				<Main/>
				<Facts/>
				<Location/>
				<Partners/>
			</>
		);
	}
}
