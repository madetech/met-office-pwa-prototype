import axios from 'axios';
import { useState } from 'react';
import {
  HourlyData,
  HourlyDataLastUpdated,
} from '../interfaces/api-data-hourly';
import styles from '../styles/Forecast.module.css';
import { Timeslot } from './Timeslot';
import { DraggableTile } from './DraggableTile';

const degreesSymbol = String.fromCharCode(176);

const formatLatitude = (latitude: number) => {
  return latitude > 0
    ? `${latitude.toFixed(2)}${degreesSymbol}N`
    : `${(latitude * -1).toFixed(2)}${degreesSymbol}S`;
};

const formatLongitude = (longitude: number) => {
  return longitude > 0
    ? `${longitude.toFixed(2)}${degreesSymbol}E`
    : `${(longitude * -1).toFixed(2)}${degreesSymbol}W`;
};

interface ForecastProps {
  data: HourlyDataLastUpdated;
}

export const Forecast = ({ data }: ForecastProps) => {
  const [forecastData, setForecastData] = useState(data);

  const coords = forecastData.features[0].geometry.coordinates;
  const long = formatLongitude(coords[0]);
  const lat = formatLatitude(coords[1]);
  const placeName = forecastData.features[0].properties.location.name;
  const lastUpdatedTime = new Date(
    forecastData.lastUpdated
  ).toLocaleTimeString();

  const currenTimeMinusOneHour = new Date(Date.now());
  const currentTimeMinusOneHour = new Date(Date.now());

  currentTimeMinusOneHour.setMinutes(1);
  currentTimeMinusOneHour.setHours(currentTimeMinusOneHour.getHours() - 1);

  const handleRefresh = async () => {
    const res = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=hourly&latitude=${coords[1]}&longitude=${coords[0]}`
    );
    setForecastData({ ...res.data, lastUpdated: new Date().toISOString() });
  };

  const handleHourlyClick = async () => {
    const res = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=hourly&latitude=${coords[1]}&longitude=${coords[0]}`
    );
    setForecastData(res.data);
  };

  const handleDailyClick = async () => {
    const res = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=daily&latitude=${coords[1]}&longitude=${coords[0]}`
    );
    setForecastData(res.data);
  };

  const forecasts = forecastData.features[0].properties.timeSeries
    .filter((forecast) => {
      if (Number(new Date(forecast.time)) < Number(currentTimeMinusOneHour)) {
        return false;
      }
      return true;
    })
    .slice(0, 15);

  return (
    <DraggableTile>
      <section className={styles.heading}>
        <article className={styles.locationData}>
          <h2 className={styles.locationName}>{placeName}</h2>
          <span className={styles.locationPosition}>
            Lat: {lat} / Long: {long}
          </span>
        </article>
        <button onClick={handleHourlyClick}>Hourly</button>
        <button onClick={handleDailyClick}>Daily</button>
        <button className={styles.refresh} onClick={handleRefresh}>
          Refresh
        </button>
      </section>
      <section className={styles.timeslots}>
        {forecasts.map((forecast) => {
          return <Timeslot forecast={forecast} key={forecast.time} />;
        })}
      </section>
    </DraggableTile>
  );
};
