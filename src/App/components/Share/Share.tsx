import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	omit,
	CombinePropsAndAttributes,
	Bind,
	subscribeEvent
} from '@flexis/ui/helpers';
import Button from '../Button';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import IconShare from '~/icons/share.svg';
import {
	style,
	classes
} from './Share.st.css';

interface ISelfProps {
	links: Record<string, string>;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLDivElement>
>;

interface IState {
	active: boolean;
}

export default class Share extends Component<IProps, IState> {

	static propTypes = {
		links: PropTypes.any.isRequired
	};

	state = {
		active: false
	};

	private unsubscribeFromOutsideClick: () => void = null;

	render() {

		const {
			className,
			children,
			...props
		} = this.props;
		const {
			active
		} = this.state;

		return (
			<div
				{...omit(props, ['links'])}
				className={style(classes.root, className)}
			>
				<Button
					className={classes.toggle}
					icon={<IconShare/>}
					title={String(children)}
					onClick={this.onToggle}
				/>
				<ul
					className={style(classes.list, {
						active
					})}
				>
					<li
						className={classes.item}
					>
						<Button
							className={classes.close}
							onClick={this.onToggle}
						/>
					</li>
					{this.renderShareLinks()}
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.toggleEffects();
	}

	componentWillUnmount() {
		this.removeEffects();
	}

	componentDidUpdate(_, { active: prevActive }: IState) {

		const {
			active
		} = this.state;

		if (prevActive !== active) {
			this.toggleEffects();
		}
	}

	@Bind()
	private onToggle() {
		this.toggleActiveState(null);
	}

	@Bind()
	private onOutsideClick() {

		const {
			active
		} = this.state;

		if (active) {
			this.toggleActiveState(false);
		}
	}

	toggleActiveState(forceState?: boolean) {

		const {
			active
		} = this.state;
		const nextActive = typeof forceState === 'boolean'
			? forceState
			: !active;

		if (nextActive === active) {
			return;
		}

		this.setState(() => ({
			active: nextActive
		}));
	}

	private toggleEffects() {

		const {
			active
		} = this.state;
		const outsideClickSubscribed = typeof this.unsubscribeFromOutsideClick === 'function';

		if (active) {

			if (!outsideClickSubscribed) {
				this.unsubscribeFromOutsideClick = subscribeEvent(
					document,
					'click',
					this.onOutsideClick
				);
			}

		} else {

			if (outsideClickSubscribed) {
				this.unsubscribeFromOutsideClick();
				this.unsubscribeFromOutsideClick = null;
			}
		}
	}

	private removeEffects() {

		if (typeof this.unsubscribeFromOutsideClick === 'function') {
			this.unsubscribeFromOutsideClick();
			this.unsubscribeFromOutsideClick = null;
		}
	}

	private renderShareLinks() {

		const {
			links
		} = this.props;

		return (
			Object.entries(links).map(([type, href]) => (
				<li
					className={classes.item}
					key={href}
				>
					<ContactLink
						className={classes.contactLink}
						type={type as ContactLinkType}
						href={href}
						title={type}
					>
						{type}
					</ContactLink>
				</li>
			))
		);
	}
}
