import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import Link from '../Link';
import Button from '../Button';
import {
	style,
	classes
} from './TicketPreview.st.css';

interface ISelfProps {
	id: string;
	name: string;
	location: string;
	date: string;
	afterparty?: boolean;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLDivElement>
>;

export default class TicketPreview extends Component<IProps> {

	static propTypes = {
		id:         PropTypes.string.isRequired,
		name:       PropTypes.string.isRequired,
		location:   PropTypes.string.isRequired,
		date:       PropTypes.string.isRequired,
		afterparty: PropTypes.bool
	};

	render() {

		const {
			className,
			id,
			name,
			location,
			date,
			afterparty,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={style(classes.root, className)}
			>
				<div
					className={classes.content}
				>
					<div
						className={classes.info}
					>
						<div
							className={classes.infoContent}
						>
							<ul
								className={classes.list}
							>
								<li
									className={classes.item}
								>
									<h2
										className={classes.title}
									>
										Номер Билета
									</h2>
									<div
										className={classes.text}
									>
										ID {id}
									</div>
								</li>
								<li
									className={classes.item}
								>
									<h2
										className={classes.title}
									>
										Для
									</h2>
									<div
										className={classes.text}
									>
										{name}
									</div>
								</li>
							</ul>
							<ul
								className={classes.list}
							>
								<li
									className={classes.item}
								>
									<h2
										className={classes.title}
									>
										Где
									</h2>
									<div
										className={classes.text}
									>
										{location}
									</div>
								</li>
								<li
									className={classes.item}
								>
									<h2
										className={classes.title}
									>
										Когда
									</h2>
									<div
										className={classes.text}
									>
										{date}
									</div>
								</li>
							</ul>
						</div>
					</div>
					{afterparty ? (
						<div
							className={classes.afterparty}
						>
							<div
								className={classes.afterpartyContent}
							>
								<h3>
									Аффтепати
								</h3>
							</div>
						</div>
					) : (
						<div
							className={classes.buyTicket}
						>
							<Link
								to='/some-url'
								disguised
							>
								<Button
									variant='secondary'
								>
									Купить билет на Аффтепати
								</Button>
							</Link>
						</div>
					)}
				</div>
				<div
					className={classes.ticket}
				>
					<h3>
						Один Билет
					</h3>
				</div>
			</div>
		);
	}
}
