import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HourlyDataLastUpdated } from '../../interfaces/api-data-hourly';
import { DraggableTile } from '../DraggableTile';
import { Forecast } from '../Forecast';
import styles from '../../styles/Location.module.css';
import Cookies from 'universal-cookie';
import { LOCATION_COOKIE_LAT, LOCATION_COOKIE_LON } from '../../constants';

interface LocationProps {
  lastKnownLocationData?: HourlyDataLastUpdated;
}

export const Location = ({ lastKnownLocationData }: LocationProps) => {
  const [data, setData] = useState<HourlyDataLastUpdated | undefined>(
    lastKnownLocationData
  );

  useEffect(() => {
    const getLocalForecast = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async function (position) {
          const currentForecast = await axios.get<HourlyDataLastUpdated>(
            `/api/get-weather-forecast?frequency=hourly&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
          );

          setData(currentForecast.data);
          const cookies = new Cookies();

          cookies.set(LOCATION_COOKIE_LAT, position.coords.latitude, {
            path: '/',
            sameSite: 'strict',
            secure: true,
          });

          cookies.set(LOCATION_COOKIE_LON, position.coords.longitude, {
            path: '/',
            sameSite: 'strict',
            secure: true,
          });
        });
      }
    };
    getLocalForecast();
  }, []);

  if (data) {
    return <Forecast data={data} isUserLocation={true} />;
  }

  return (
    <DraggableTile>
      <div data-testid="address-not-found" className={styles.notFound}>
        Local forecast NOT found
      </div>
    </DraggableTile>
  );
};
