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
import {
	getLocalizedPath
} from '~/services/i18n';
import ScrollToTop from '~/components/ScrollToTop';
import Header from '~/blocks/Header';
import Index from '~/containers/Index';
import Team from '~/containers/Team';
import Speakers from '~/containers/Speakers';
import Partners from '~/containers/Partners';
import CodeOfConduct from '~/containers/CodeOfConduct';
import Footer from '~/blocks/Footer';
import {
	Routes
} from './routes';
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

		const {
			context
		} = this;

		return this.router(
			<>
				<ScrollToTop/>
				<Header/>
				<Route
					path={getLocalizedPath(context, Routes.Index)}
					exact
					component={Index}
				/>
				<Route
					path={getLocalizedPath(context, Routes.Team)}
					exact
					component={Team}
				/>
				<Route
					path={getLocalizedPath(context, Routes.Speakers)}
					component={Speakers}
				/>
				<Route
					path={getLocalizedPath(context, Routes.Partners)}
					component={Partners}
				/>
				<Route
					path={getLocalizedPath(context, Routes.CodeOfConduct)}
					component={CodeOfConduct}
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
			<Router
				basename={process.env.BASE_URL || null}
			>
				{children}
			</Router>
		);
	}
}
