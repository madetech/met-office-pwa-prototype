import React, { useState, useEffect } from 'react';
import styles from '../../styles/Location.module.css';

export const LocationComponent = () => {
  const [latitude, setLatitude] = useState<number>(999);
  const [longitude, setLongitude] = useState<number>(999);

  useEffect(() => {
    if (latitude === 999) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is     : ', position.coords.latitude);
        console.log('Longitude is    : ', position.coords.longitude);

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [latitude]);

  if (longitude === 999) {
    return <div className={styles.notFound} />;
  }

  return (
    <div className={styles.address}>
      Current latitude: {latitude} / longitude: {longitude}
    </div>
  );
};
