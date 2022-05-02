import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HourlyDataLastUpdated } from '../../interfaces/api-data-hourly';
import { DraggableTile } from '../DraggableTile';
import { Forecast } from '../Forecast';
import useStorage, { KEY_LOCAL_FORECAST } from '../LocalStorage';
import styles from '../../styles/Location.module.css';

export const Location = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [data, setData] = useState<HourlyDataLastUpdated | null>(null);
  const { getItemAsHourlyDataLastUpdated, setItem } = useStorage();

  useEffect(() => {
    setIsLoaded(true);

    const getLocalForecast = async () => {
      if (data === null) {
        const localForecast = getItemAsHourlyDataLastUpdated('wrong-key');
        if (localForecast === null) {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async function (position) {
              const currentForecast = await axios.get<HourlyDataLastUpdated>(
                `/api/get-weather-forecast?frequency=hourly&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
              );

              setData(currentForecast.data);
              setItem(KEY_LOCAL_FORECAST, JSON.stringify(currentForecast.data));
            });
          }
        } else {
          setData(localForecast);
        }
      }
    };
    getLocalForecast();
  }, [getItemAsHourlyDataLastUpdated, data, setItem]);

  if (isLoaded && data) {
    return <Forecast data={data} />;
  }

  return (
    <DraggableTile>
      <div data-testid="address-not-found" className={styles.notFound}>
        Local forecast NOT found
      </div>
    </DraggableTile>
  );
};
