import { HourlyData } from '../interfaces/api-data-hourly';
import styles from '../styles/Forecast.module.css';
import { Timeslot } from './Timeslot';

const degreesSymbol = String.fromCharCode(176);

const formatLatitude = (latitude: number) => {
  return latitude > 0
    ? `${latitude}${degreesSymbol}N`
    : `${latitude * -1}${degreesSymbol}S`;
};

const formatLongitude = (longitude: number) => {
  return longitude > 0
    ? `${longitude}${degreesSymbol}E`
    : `${longitude * -1}${degreesSymbol}W`;
};

interface ForecastProps {
  data: HourlyData;
}

export const Forecast = ({ data }: ForecastProps) => {
  const long = formatLongitude(data.features[0].geometry.coordinates[0]);
  const lat = formatLatitude(data.features[0].geometry.coordinates[1]);
  const placeName = data.features[0].properties.location.name;
  const forecasts = data.features[0].properties.timeSeries;

  return (
    <section className="tile">
      <article className={styles.locationData}>
        <h2 className={styles.locationName}>{placeName}</h2>
        <div className={styles.locationPosition}>
          <span>Lat: {lat}</span>
          <span>Long: {long}</span>
        </div>
      </article>

      <section className={styles.timeslots}>
        {forecasts.map((forecast) => {
          return <Timeslot forecast={forecast} key={forecast.time} />;
        })}
      </section>
    </section>
  );
};