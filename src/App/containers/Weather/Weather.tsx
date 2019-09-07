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
import {
	classes
} from './Weather.st.css';

export interface IProps extends IWeatherStateProps {
	loadWeatherInfo(city: string);
}

const UPDATE_INTERVAL = 10000;

export class WatherContainer extends Component<IProps> {

	updateIntervalId: any = null;

	constructor(props) {

		super(props);

		this.onCityChange = this.onCityChange.bind(this);
		this.loadWeatherInfo = this.loadWeatherInfo.bind(this);
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
				className={classes.root}
			>
				{this.citySelect()}
				<Weather
					className={classes.mainWeather}
					{...currentWeather.toJS()}
				/>
				<WeatherList
					className={classes.mainList}
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
				className={classes.citySelectContainer}
			>
				<select
					className={classes.citySelect}
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
		this.loadWeatherInfo();
		this.updateIntervalId = setInterval(this.loadWeatherInfo, UPDATE_INTERVAL);
	}

	componentWillUnmount() {
		clearInterval(this.updateIntervalId);
	}

	private onCityChange({ currentTarget: { value } }: ChangeEvent<HTMLSelectElement>) {
		this.props.loadWeatherInfo(value);
	}

	private loadWeatherInfo() {

		const {
			city
		} = this.props;

		this.props.loadWeatherInfo(city);
	}
}
