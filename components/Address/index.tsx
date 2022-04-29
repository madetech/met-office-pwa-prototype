import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImCompass } from 'react-icons/im';
import styles from '../../styles/Location.module.css';
import useStorage from '../../useLocalStorage';

export const Address = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { getItem, setItem } = useStorage();
  const keyName = 'local-address';

  const currentAddress = getItem(keyName);

  useEffect(() => {
    setIsLoaded(true);

    const getAddress = async () => {
      if (currentAddress === undefined) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async function (position) {
            const address = await axios.get<string>(
              `/api/get-address?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            );

            setItem(keyName, address.data);
          });
        }
      }
    };

    getAddress();
  }, [currentAddress, setItem]);

  if (isLoaded) {
    return (
      <div className={styles.location}>
        <ImCompass />
        <span className={styles.address}>{currentAddress}</span>
      </div>
    );
  }

  return (
    <div className={styles.location}>
      <div data-testid="address-not-found">
        <span className={styles.address}>&nbsp;</span>
      </div>
    </div>
  );
};
