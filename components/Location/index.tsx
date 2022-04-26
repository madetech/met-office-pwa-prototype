import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Location.module.css';

export const Location = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [currentAddress, setCurrentAddress] = useState<string>('');

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === null) {
        navigator.geolocation.getCurrentPosition(async function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          const address = await axios.get<string>(
            `/api/get-address?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
          );

          setCurrentAddress(address.data);
        });
      }
    };

    getAddress();
  }, [latitude]);

  if (currentAddress) {
    return (
      <div className={styles.address}>
        {currentAddress} (lat: {latitude}/lng: {longitude})
      </div>
    );
  }

  return <div className={styles.notFound} />;
};
