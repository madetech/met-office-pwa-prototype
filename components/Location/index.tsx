import React, { useEffect } from 'react';

export function Location() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Position object : ', position);
      console.log('Latitude is     : ', position.coords.latitude);
      console.log('Longitude is    : ', position.coords.longitude);
    });

    return () => console.log('unmounting...');
  }, []);

  return (
    <div>
      <h4>Using geolocation JavaScript API in React</h4>
    </div>
  );
}
