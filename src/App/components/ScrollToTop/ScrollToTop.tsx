import {
	Component
} from 'react';
import {
	withRouter,
	RouteComponentProps
} from 'react-router-dom';
import {
	Location
} from 'history';

export interface IProps extends RouteComponentProps {
	location: Location;
}

class ScrollToTop extends Component<IProps> {

	render() {

		const {
			children
		} = this.props;

		return children;
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
