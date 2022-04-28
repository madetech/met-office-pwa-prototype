import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HourlyData,
  HourlyDataLastUpdated,
} from '../../interfaces/api-data-hourly';
import { Forecast } from '../Forecast';
import styles from '../../styles/Location.module.css';

export const Location = () => {
  const [data, setData] = useState<HourlyDataLastUpdated | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (data === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.watchPosition(async function (position) {
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

  return <div data-testid="address-not-found" className={styles.notFound} />;
};
