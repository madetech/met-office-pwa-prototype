import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { HourlyData } from '../../interfaces/api-data-hourly';
import styles from '../../styles/Location.module.css';
import { Forecast } from '../Forecast';

export const Location = () => {
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [data, setData] = useState<HourlyData | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (data === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async function (position) {
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
        <div className={styles.address}>{currentAddress}</div>
        <Forecast data={data} />
      </Fragment>
    );
  }

  return <div data-testid="address-not-found" className={styles.notFound} />;
};
