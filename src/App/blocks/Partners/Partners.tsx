import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Brands, {
	BrandsTitle,
	BrandsRow,
	BrandsItem
} from '~/components/Brands';
import stylesheet from './Partners.st.css';

export type IProps = ISectionProps;

export default class Partners extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const {
			partners: {
				partners
			}
		} = context.getCatalog(
			context.getLocale()
		) as any;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2
					{...stylesheet('title')}
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
							{items.map(item => (
								<BrandsItem
									key={item.title}
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
