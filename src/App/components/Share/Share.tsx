import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	omit,
	CombinePropsAndAttributes,
	Bind
} from '@flexis/ui/helpers';
import Button from '../Button';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import IconShare from '~/icons/share.svg';
import IconClose from '~/icons/close.svg';
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
					onClick={this.open}
				/>
				<ul
					className={style(classes.list, {
						active
					})}
				>
					{this.renderShareLinks()}
					<li
						className={classes.item}
					>
						<Button
							className={classes.close}
							icon={<IconClose/>}
							onClick={this.close}
						/>
					</li>
				</ul>
			</div>
		);
	}

	@Bind()
	private open() {
		this.setState(() => ({
			active: true
		}));
	}

	@Bind()
	private close() {
		this.setState(() => ({
			active: false
		}));
	}

	private renderShareLinks() {

		const {
			links
		} = this.props;

		return (
			Object.entries(links).map(([type, href]) => (
				<li
					className={classes.item}
				>
					<ContactLink
						className={classes.contactLink}
						key={href}
						type={type as ContactLinkType}
						href={href}
					>
						{type}
					</ContactLink>
				</li>
			))
		);
	}
}
