import { HourlyData } from '../interfaces/api-data-hourly';
import styles from '../styles/Forecast.module.css';
import { Timeslot } from './Timeslot';
import { DraggableTile } from './DraggableTile';

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

  const currenTimeMinusOneHour = new Date(Date.now());
  currenTimeMinusOneHour.setMinutes(1);
  currenTimeMinusOneHour.setHours(currenTimeMinusOneHour.getHours() - 1);

  const forecasts = data.features[0].properties.timeSeries
    .filter((forecast) => {
      if (Number(new Date(forecast.time)) < Number(currenTimeMinusOneHour)) {
        return false;
      }
      return true;
    })
    .slice(0, 15);

  return (
    <DraggableTile>
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
    </DraggableTile>
  );
};
