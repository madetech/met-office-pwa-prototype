import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HourlyData,
  HourlyDataLastUpdated,
} from '../../interfaces/api-data-hourly';
import { DraggableTile } from '../DraggableTile';
import { Forecast } from '../Forecast';
import styles from '../../styles/Location.module.css';

export const localForecast = ({ latitude: string }) => {
  let latitude = '';

  if (typeof window !== 'undefined') {
    latitude =
      localStorage.getItem('latitude') === null
        ? ''
        : localStorage.getItem('latitude');
  }

  return latitude;
};

export const Location = () => {
  const [data, setData] = useState<HourlyDataLastUpdated | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (localForecast.latitude === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async function (position) {
            const currentForecast = await axios.get<HourlyData>(
              `/api/get-weather-forecast?frequency=hourly&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setData({
              ...currentForecast.data,
              lastUpdated: new Date().toISOString(),
            });
          });
        }
      }
    };

    getAddress();
  }, [data]);

  if (data) {
    return <Forecast data={data} />;
  }

  return (
    <DraggableTile>
      <div data-testid="address-not-found" className={styles.notFound} />
    </DraggableTile>
  );
};
