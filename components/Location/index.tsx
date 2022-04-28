import React, { useState, useEffect, Fragment } from 'react';
import { ImCompass } from 'react-icons/im';
import axios from 'axios';
import {
  HourlyData,
  HourlyDataLastUpdated,
} from '../../interfaces/api-data-hourly';
import { Forecast } from '../Forecast';
import styles from '../../styles/Location.module.css';

export const Location = () => {
  const [latitude, setLatitude] = useState<number>(999);
  const [longitude, setLongitude] = useState<number>(999);
  const [frequency, setFrequency] = useState<string>('');
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [data, setData] = useState<HourlyDataLastUpdated | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (data === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.watchPosition(async function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setFrequency('hourly');

            const address = await axios.get<string>(
              `/api/get-address?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            const currentForecast = await axios.get<HourlyData>(
              `/api/get-weather-forecast?frequency=hourly&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setCurrentAddress(address.data);

            setData({
              ...currentForecast.data,
              lastUpdated: new Date().toISOString(),
            });
          });
        }
      }
    };

    getAddress();
  }, [data, frequency]);

  const handleHourlyClick = async () => {
    setFrequency('hourly');

    setForecast('hourly', latitude, longitude);
  };

  const handleDailyClick = async () => {
    setFrequency('daily');

    setForecast('daily', latitude, longitude);
  };

  const setForecast = async (frequency: string, lat: number, lng: number) => {
    if (typeof frequency === 'undefined' || frequency === null) {
      frequency = 'hourly';
    }

    const currentForecast = await axios.get<HourlyData>(
      `/api/get-weather-forecast?frequency=${frequency}&latitude=${lat}&longitude=${lng}`
    );

    setData(currentForecast.data);
  };

  if (data) {
    return (
      <>
        <div className={styles.location}>
          <ImCompass />
          <span className={styles.address}>{currentAddress}</span>
        </div>
        <Forecast data={data} />
      </>
    );
  }

  return <div data-testid="address-not-found" className={styles.notFound} />;
};
