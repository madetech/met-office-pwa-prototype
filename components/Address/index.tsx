import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImCompass } from 'react-icons/im';
import styles from '../../styles/Location.module.css';

export const Address = () => {
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      if (currentAddress === null) {
        if ('geolocation' in navigator) {
          navigator.geolocation.watchPosition(async function (position) {
            const address = await axios.get<string>(
              `/api/get-address?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setCurrentAddress(address.data);
          });
        }
      }
    };

    getAddress();
  }, [currentAddress]);

  if (currentAddress !== null) {
    return (
      <div className={styles.location}>
        <ImCompass />
        <span className={styles.address}>{currentAddress}</span>
      </div>
    );
  }

  return <div data-testid="address-not-found" className={styles.notFound} />;
};
