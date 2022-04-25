import React, { useEffect } from 'react';
import Geocode from 'react-geocode';

export function Location() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is     : ', position.coords.latitude);
      console.log('Longitude is    : ', position.coords.longitude);

      Geocode.setApiKey(apiKey);

      Geocode.fromLatLng(
        position.coords.latitude.toString(),
        position.coords.longitude.toString()
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          console.log('Address is: ', address);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return () => console.log('unmounting...');
  }, []);

  return (
    <div>
      <h4>Using geolocation JavaScript API in React</h4>
    </div>
  );
}
