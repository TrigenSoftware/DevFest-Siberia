import React, {
	ChangeEvent,
	Component
} from 'react';
import {
	IWeatherStateProps
} from '~/store/types';
import CITIES from '~/store/cities';
import Weather from '~/components/Weather';
import WeatherList from '~/components/WeatherList';
import stylesheet from './Weather.st.css';

export interface IProps extends IWeatherStateProps {
	loadWeatherInfo(city: string);
}

const UPDATE_INTERVAL = 10000;

export class WatherContainer extends Component<IProps> {

	updateIntervalId: any = null;

	constructor(props) {

		super(props);

		this.onCityChange = this.onCityChange.bind(this);
	}

	render() {

		const {
			currentWeather,
			weatherForecast
		} = this.props;

		if (!currentWeather) {
			return null;
		}

		return (
			<main
				{...stylesheet('root')}
			>
				{this.citySelect()}
				<Weather
					{...stylesheet('mainWeather')}
					{...currentWeather.toJS()}
				/>
				<WeatherList
					{...stylesheet('mainList')}
				>
					{weatherForecast.map((weatherInfo, i) => (
						<Weather
							key={i}
							{...weatherInfo.toJS()}
						/>
					)).toJS()}
				</WeatherList>
			</main>
		);
	}

	private citySelect() {
		return (
			<div
				{...stylesheet('citySelectContainer')}
			>
				<select
					{...stylesheet('citySelect')}
					defaultValue={CITIES[0]}
					onChange={this.onCityChange}
				>
					{CITIES.map(city => (
						<option key={city}>
							{city}
						</option>
					))}
				</select>
			</div>
		);
	}

	componentDidMount() {

		this.updateIntervalId = setInterval(() => {

			const {
				city
			} = this.props;

			this.props.loadWeatherInfo(city);

		}, UPDATE_INTERVAL);
	}

	componentWillUnmount() {
		clearInterval(this.updateIntervalId);
	}

	private onCityChange({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) {
		this.props.loadWeatherInfo(value);
	}
}
