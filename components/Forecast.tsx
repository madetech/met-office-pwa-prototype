import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  HourlyData,
  HourlyDataLastUpdated,
} from '../interfaces/api-data-hourly';
import { DailyData, DailyDataLastUpdated } from '../interfaces/api-data-daily';
import { DraggableTile } from './DraggableTile';
import styles from '../styles/Forecast.module.css';
import { ImCompass } from 'react-icons/im';
import { WeatherTiles } from './WeatherTiles';

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
  isUserLocation: boolean;
}

export const Forecast = ({ data, isUserLocation }: ForecastProps) => {
  const [forecastData, setForecastData] = useState(data);
  const [forecastDailyData, setForecastDailyData] =
    useState<DailyDataLastUpdated>();
  const [isHourlyData, setIsHourlyData] = useState<boolean>(true);
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    if (fetchingData) {
      setTimeout(() => {
        setFetchingData(false);
      }, 1000);
    }
  }, [fetchingData]);

  const currentTimeMinusOneHour = new Date(Date.now());
  currentTimeMinusOneHour.setMinutes(1);
  currentTimeMinusOneHour.setHours(currentTimeMinusOneHour.getHours() - 1);

  const coords = forecastData.features[0].geometry.coordinates;
  const long = formatLongitude(coords[0]);
  const lat = formatLatitude(coords[1]);
  const placeName = forecastData.features[0].properties.location.name;
  const lastUpdatedTime = isHourlyData
    ? new Date(forecastData.lastUpdated).toLocaleTimeString()
    : new Date(forecastDailyData?.lastUpdated || '').toLocaleTimeString();

  const handleRefresh = async () => {
    if (isHourlyData) {
      const res = await axios.get<HourlyData>(
        `/api/get-weather-forecast?frequency=hourly&latitude=${coords[1]}&longitude=${coords[0]}`
      );
      setForecastData({ ...res.data, lastUpdated: new Date().toISOString() });
    } else {
      const res = await axios.get<DailyData>(
        `/api/get-weather-forecast?frequency=daily&latitude=${coords[1]}&longitude=${coords[0]}`
      );
      setForecastDailyData({
        ...res.data,
        lastUpdated: new Date().toISOString(),
      });
    }

    setFetchingData(true);
  };

  const handleHourlyClick = async () => {
    if (isHourlyData) return;
    const res = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=hourly&latitude=${coords[1]}&longitude=${coords[0]}`
    );
    setForecastData({ ...res.data, lastUpdated: new Date().toISOString() });

    setIsHourlyData(true);
  };

  const handleDailyClick = async () => {
    if (!isHourlyData) return;
    const res = await axios.get<DailyData>(
      `/api/get-weather-forecast?frequency=daily&latitude=${coords[1]}&longitude=${coords[0]}`
    );

    setForecastDailyData({
      ...res.data,
      lastUpdated: new Date().toISOString(),
    });

    setIsHourlyData(false);
  };

  const forecasts = forecastData.features[0].properties.timeSeries
    .filter((forecast) => {
      if (Number(new Date(forecast.time)) < Number(currentTimeMinusOneHour)) {
        return false;
      }
      return true;
    })
    .slice(0, 15);

  const dailyForecasts = forecastDailyData
    ? forecastDailyData.features[0].properties.timeSeries.slice(1)
    : [];

  return (
    <DraggableTile>
      <section className={styles.heading}>
        <article className={styles.locationData}>
          <h2 className={styles.locationName}>
            {isUserLocation && <ImCompass />} {placeName}
          </h2>
          <span className={styles.locationPosition}>
            Lat: {lat} / Long: {long}
          </span>
        </article>

        <button className={styles.refresh} onClick={handleRefresh}>
          Refresh
        </button>
      </section>

      <div className={styles.btnWrapper}>
        <button
          className={`${styles.btn} ${styles.btnLeft} ${
            isHourlyData ? styles.btnActive : ''
          }`}
          onClick={handleHourlyClick}
        >
          Hourly
        </button>
        <button
          className={`${styles.btn} ${styles.btnRight} ${
            isHourlyData ? '' : styles.btnActive
          }`}
          onClick={handleDailyClick}
        >
          Daily
        </button>
      </div>

      <WeatherTiles
        dailyForecasts={dailyForecasts}
        forecasts={forecasts}
        isHourlyData={isHourlyData}
        lastUpdatedTime={lastUpdatedTime}
        fetchingData={fetchingData}
      />
    </DraggableTile>
  );
};
