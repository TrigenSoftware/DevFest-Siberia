import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import stylesheet from './TicketPreview.st.css';

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
				{...stylesheet('root', {}, props)}
			>
				<div
					{...stylesheet('content')}
				>
					<div
						{...stylesheet('info')}
					>
						<div
							{...stylesheet('infoContent')}
						>
							<ul
								{...stylesheet('list')}
							>
								<li
									{...stylesheet('item')}
								>
									<h2
										{...stylesheet('title')}
									>
										Номер Билета
									</h2>
									<div
										{...stylesheet('text')}
									>
										ID {id}
									</div>
								</li>
								<li
									{...stylesheet('item')}
								>
									<h2
										{...stylesheet('title')}
									>
										Для
									</h2>
									<div
										{...stylesheet('text')}
									>
										{name}
									</div>
								</li>
							</ul>
							<ul
								{...stylesheet('list')}
							>
								<li
									{...stylesheet('item')}
								>
									<h2
										{...stylesheet('title')}
									>
										Где
									</h2>
									<div
										{...stylesheet('text')}
									>
										{location}
									</div>
								</li>
								<li
									{...stylesheet('item')}
								>
									<h2
										{...stylesheet('title')}
									>
										Когда
									</h2>
									<div
										{...stylesheet('text')}
									>
										{date}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
