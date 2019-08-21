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
import Index from '~/containers/Index';
import Team from '~/containers/Team';
import Speakers from '~/containers/Speakers';
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
					component={Index}
				/>
				<Route
					path={this.path('/team')}
					exact
					component={Team}
				/>
				<Route
					path={this.path('/speakers')}
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

	private path(path: string) {

		const locale = this.context.getLocale();

		return locale === 'en'
			? path
			: `/ru${path}`;
	}
}
