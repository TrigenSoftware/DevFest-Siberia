import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	getPartners
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Brands, {
	BrandsTitle,
	BrandsRow,
	BrandsItem
} from '~/components/Brands';
import {
	style,
	classes
} from './Partners.st.css';

export type IProps = ISectionProps;

export default class Partners extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const partners = getPartners(context);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2
					className={classes.title}
				>
					{__x`partners.title`}
				</h2>
				{partners.map(({
					title,
					items
				}) => (
					<Brands key={title}>
						<BrandsTitle>
							{title}
						</BrandsTitle>
						<BrandsRow>
							{items.map((item, i) => (
								<BrandsItem
									key={i}
									{...item}
								/>
							))}
						</BrandsRow>
					</Brands>
				))}
			</Section>
		);
	}
}
