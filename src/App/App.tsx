// tslint:disable space-in-parens
import React, {
	ReactChild,
	ContextType,
	Component
} from 'react';
import {
	Helmet
} from 'react-helmet';
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
import '@flexis/ui/reboot.st.css';
import './App.st.css';
import {
	getLocalizedPath,
	getMetaData,
	getSchemaData
} from '~/services/i18n';
import {
	setAppElement
} from '~/components/Modal';
import ScrollToTop from '~/components/ScrollToTop';
import Header from '~/blocks/Header';
import Index from '~/containers/Index/loadable';
import Team from '~/containers/Team/loadable';
import Speakers from '~/containers/Speakers/loadable';
import Partners from '~/containers/Partners/loadable';
import CodeOfConduct from '~/containers/CodeOfConduct/loadable';
import Buy from '~/containers/Buy/loadable';
import Cabinet from '~/containers/Cabinet/loadable';
import TermsOfService from '~/containers/TermsOfService/loadable';
import Footer from '~/blocks/Footer';
import {
	Routes
} from './routes';

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
		const metaData = getMetaData(context);

		return this.router(
			<>
				<Helmet>
					<html lang={context.getLocale()}/>
					{Object.entries(metaData).map(([key, value]) => (
						<meta
							key={key}
							name={key}
							content={value as string}
						/>
					))}
					<script type='application/ld+json'>
						{JSON.stringify(getSchemaData(context))}
					</script>
				</Helmet>
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
				<Route
					path={getLocalizedPath(context, Routes.Cabinet)}
					component={Cabinet}
				/>
				<Route
					path={getLocalizedPath(context, Routes.Buy)}
					component={Buy}
				/>
				<Route
					path={getLocalizedPath(context, Routes.TermsOfService)}
					component={TermsOfService}
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

	async componentDidMount() {

		setAppElement('#view');

		const {
			default: analytics
		} = await import(/* ... */ './analytics');

		analytics();
	}
}
