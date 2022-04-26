import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import styles from '../../styles/Location.module.css';

interface Props {
  googleApiKey: string;
}

export const LocationComponent = ({ googleApiKey }: Props) => {
  const [latitude, setLatitude] = useState<number>(999);
  const [longitude, setLongitude] = useState<number>(999);
  const [currentAddress, setCurrentAddress] = useState<string>('');

  useEffect(() => {
    if (latitude === 999) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is     : ', position.coords.latitude);
        console.log('Longitude is    : ', position.coords.longitude);

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        Geocode.setApiKey(googleApiKey);

        Geocode.fromLatLng(
          position.coords.latitude.toString(),
          position.coords.longitude.toString()
        ).then(
          (response) => {
            setCurrentAddress(response.results[0].formatted_address);
          },
          (error) => {
            console.log(error);
          }
        );
      });
    }
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
