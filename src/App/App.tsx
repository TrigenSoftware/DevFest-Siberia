import React, {
	ReactChild,
	ContextType,
	Component
} from 'react';
import {
	hot
} from 'react-hot-loader';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import {
	I18nContext
} from 'i18n-for-react';
import Header from '~/blocks/Header';
import Main from '~/blocks/Main';
import Facts from '~/blocks/Facts';
import Photos from '~/blocks/Photos';
import Location from '~/blocks/Location';
import Partners from '~/blocks/Partners';
import Team from '~/blocks/Team';
// import Speakers from '~/blocks/Speakers';
import Footer from '~/blocks/Footer';
import '@flexis/ui/reboot.st.css';
import './App.st.css';

export interface IProps {
	disableRouter?: boolean;
}

@hot(module)
export default class App extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {
		return this.router(
			<>
				<Header/>
				<Route
					path={this.path('/')}
					exact
					render={this.home}
				/>
				<Route
					path={this.path('/team')}
					exact
					render={this.team}
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
				<Photos/>
				<Location/>
				<Partners/>
			</>
		);
	}

	private team() {
		return (
			<Team/>
		);
	}

	private path(path: string) {

		const locale = this.context.getLocale();

		return locale === 'en'
			? path
			: `/ru${path}`;
	}
}
