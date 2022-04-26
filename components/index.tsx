import { HourlyData } from '../interfaces/api-data-hourly';
import { Navigation } from './Navigation';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { Login } from './login';
import { Search } from './Search';
import { Forecast } from './Forecast';
=======
import { Location } from './Location';
>>>>>>> 3c97751... Amend Index to add Location component to page
import styles from '../styles/Index.module.css';

interface IndexProps {
  data: HourlyData;
  hasReadPermission: boolean;
}

export const Index = ({ hasReadPermission, data }: IndexProps) => {
  const router = useRouter();
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <main className={styles.pageContainer}>
      <Navigation />
<<<<<<< HEAD
      <Search />
      <Forecast data={data} />
    </main>
=======

      <Location />

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
>>>>>>> 3c97751... Amend Index to add Location component to page
  );
};
