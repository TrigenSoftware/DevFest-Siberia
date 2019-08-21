import {
	Component
} from 'react';
import {
	withRouter,
	RouteComponentProps
} from 'react-router-dom';

export type IProps = RouteComponentProps;

class ScrollToTop extends Component<IProps> {

	render() {

		return this.props.children;
	}

	componentDidUpdate({ location: prevLocation }) {

		const {
			pathname
		} = this.props.location;

		if (pathname !== prevLocation.pathname) {
			window.scrollTo(0, 0);
		}
	}
}

export default withRouter(ScrollToTop);
