import React, {
	Component
} from 'react';
import {
	Link as RouterLink
} from 'react-router-dom';
import {
	LocationDescriptor
} from 'history';
import PropTypes from 'prop-types';
import FlexisLink, {
	IProps as IFlexisLinkProps
} from '@flexis/ui/components/Link';
import unsetSize from '../common/unsetSize';
import stylesheet from './Link.st.css';

export interface IProps extends IFlexisLinkProps {
	disabled?: boolean;
	to?: LocationDescriptor;
}

function isExternalLink(to: LocationDescriptor) {
	return typeof to === 'string' && /^http/.test(to);
}

export default class Link extends Component<IProps> {

	static propTypes = {
		...FlexisLink.propTypes,
		disabled: PropTypes.bool,
		to:       PropTypes.any
	};

	static defaultProps = {
		...FlexisLink.defaultProps,
		linkElement: null
	};

	render() {

		const {
			linkElement: linkElementProp,
			linkElementCustomProps: linkElementCustomPropsProp,
			tabIndex: tabIndexProp,
			disabled,
			to,
			href,
			icon,
			children,
			...props
		} = this.props;
		const useAnchor = typeof href === 'string' || isExternalLink(to);
		const linkElement = useAnchor
			? undefined
			: linkElementProp || RouterLink;
		const linkElementCustomProps = useAnchor
			? { href: to || href }
			: {
				...linkElementCustomPropsProp,
				to
			};
		const tabIndex = typeof tabIndexProp !== 'undefined'
			? tabIndexProp
			: undefined;

		return (
			<FlexisLink
				{...props}
				{...stylesheet('root', {
					disabled: Boolean(disabled)
				}, props)}
				linkElement={linkElement}
				linkElementCustomProps={linkElementCustomProps}
				icon={unsetSize(icon)}
				tabIndex={tabIndex}
			>
				{children}
			</FlexisLink>
		);
	}
}
