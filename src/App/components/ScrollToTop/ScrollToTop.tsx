import {
	ReactNode,
	Component
} from 'react';
import {
	withRouter,
	RouteComponentProps
} from 'react-router-dom';

export interface IProps extends RouteComponentProps {
	children?: ReactNode;
}

class ScrollToTop extends Component<IProps> {

	static defaultProps = {
		children: null
	};

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
