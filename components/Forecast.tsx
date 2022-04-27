import axios from 'axios';
import { useState } from 'react';
import { HourlyData } from '../interfaces/api-data-hourly';
import getForecastData from '../requests/getForecastData';
import styles from '../styles/Forecast.module.css';
import { Timeslot } from './Timeslot';

const degreesSymbol = String.fromCharCode(176);

const formatLatitude = (latitude: number) => {
  return latitude > 0
    ? `${latitude}${degreesSymbol}N`
    : `${latitude * -1}${degreesSymbol}S`;
};

const formatLongitude = (longitude: number) => {
  return longitude > 0
    ? `${longitude}${degreesSymbol}E`
    : `${longitude * -1}${degreesSymbol}W`;
};

interface ForecastProps {
  data: HourlyData;
}

export const Forecast = ({ data }: ForecastProps) => {
  const [forecastData, setForecastData] = useState(data);

  const coords = forecastData.features[0].geometry.coordinates;
  const long = formatLongitude(coords[0]);
  const lat = formatLatitude(coords[1]);
  const placeName = forecastData.features[0].properties.location.name;

  const currenTimeMinusOneHour = new Date(Date.now());
  currenTimeMinusOneHour.setMinutes(1);
  currenTimeMinusOneHour.setHours(currenTimeMinusOneHour.getHours() - 1);

  const handleRefresh = async () => {
    const res = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=hourly&latitude=${coords[1]}&longitude=${coords[0]}`
    );
    setForecastData(res.data);
  };

  const forecasts = forecastData.features[0].properties.timeSeries
    .filter((forecast) => {
      if (Number(new Date(forecast.time)) < Number(currenTimeMinusOneHour)) {
        return false;
      }
      return true;
    })
    .slice(0, 15);

  return (
    <section className="tile">
      <section className={styles.heading}>
        <article className={styles.locationData}>
          <h2 className={styles.locationName}>{placeName}</h2>
          <span className={styles.locationPosition}>
            Lat: {lat} / Long: {long}
          </span>
        </article>
        <button className={styles.refresh} onClick={handleRefresh}>
          Refresh
        </button>
      </section>

      <section className={styles.timeslots}>
        {forecasts.map((forecast) => {
          return <Timeslot forecast={forecast} key={forecast.time} />;
        })}
      </section>
    </section>
  );
};
