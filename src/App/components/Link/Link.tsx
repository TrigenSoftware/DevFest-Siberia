import React, {
	ContextType,
	Component
} from 'react';
import {
	Link as RouterLink
} from 'react-router-dom';
import {
	LocationDescriptor
} from 'history';
import PropTypes from 'prop-types';
import {
	I18nContext
} from 'i18n-for-react';
import FlexisLink, {
	IProps as IFlexisLinkProps
} from '@flexis/ui/components/Link';
import getPath from '../common/i18n';
import unsetSize from '../common/unsetSize';
import stylesheet from './Link.st.css';

export interface IProps extends IFlexisLinkProps {
	disabled?: boolean;
	disguised?: boolean;
	to?: LocationDescriptor;
}

function isExternalLink(to: LocationDescriptor) {
	return typeof to === 'string' && /^http/.test(to);
}

export default class Link extends Component<IProps> {

	static propTypes = {
		...FlexisLink.propTypes,
		disabled:  PropTypes.bool,
		disguised: PropTypes.bool,
		to:        PropTypes.any
	};

	static defaultProps = {
		...FlexisLink.defaultProps,
		linkElement: null
	};

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			linkElement: linkElementProp,
			linkElementCustomProps: linkElementCustomPropsProp,
			tabIndex: tabIndexProp,
			disabled,
			disguised,
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
				to: typeof to === 'string'
					? getPath(this.context, to)
					: to
			};
		const tabIndex = typeof tabIndexProp !== 'undefined'
			? tabIndexProp
			: disguised
				? -1
				: undefined;

		return (
			<FlexisLink
				{...props}
				{...stylesheet('root', {
					disabled:  Boolean(disabled),
					disguised: Boolean(disguised)
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
