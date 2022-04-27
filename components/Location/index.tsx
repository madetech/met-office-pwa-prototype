import React, { useState, useEffect, Fragment } from 'react';
import { ImCompass } from 'react-icons/im';
import axios from 'axios';
import { HourlyData } from '../../interfaces/api-data-hourly';
import { Forecast } from '../Forecast';
import styles from '../../styles/Location.module.css';

export const Location = () => {
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [data, setData] = useState<HourlyData | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (data === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.watchPosition(async function (position) {
            const address = await axios.get<string>(
              `/api/get-address?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setCurrentAddress(address.data);

            const currentForecast = await axios.get<HourlyData>(
              `/api/get-weather-forecast?frequency=hourly&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setData(currentForecast.data);
          });
        }
      }
    };

    getAddress();
  }, [data]);

  if (data) {
    return (
      <Fragment>
        <div className={styles.location}>
          <ImCompass />
          <span className={styles.address}>{currentAddress}</span>
        </div>
        <Forecast data={data} />
      </Fragment>
    );
  }

  return <div data-testid="address-not-found" className={styles.notFound} />;
};
