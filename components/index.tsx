// import { useRouter } from 'next/router';
// import { Login } from './login';
import { HourlyData } from '../interfaces/api-data-hourly';

interface IndexProps {
  hasReadPermission: boolean;
  data: HourlyData;
}

export const Index = ({ hasReadPermission, data }: IndexProps) => {
  // const router = useRouter();
  // if (!hasReadPermission) {
  //   return <Login redirectPath={router.asPath} />;
  // }

  const long = data.features[0].geometry.coordinates[0];
  const lat = data.features[0].geometry.coordinates[1];
  const placeName = data.features[0].properties.location.name;
  const forecasts = data.features[0].properties.timeSeries;

  return (
    <div>
      <h1>{placeName}</h1>
      <h2>
        Lat: {lat} / Long: {long}
      </h2>
      {forecasts.map((forecast, index: number) => {
        return (
          <p key={index}>
            {forecast.time} | Temp: {forecast.screenTemperature} | Precip.
            probability {forecast.probOfPrecipitation} | Weather code:{' '}
            {forecast.significantWeatherCode}
          </p>
        );
      })}
    </div>
  );
};
