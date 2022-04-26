import { WeatherIcon } from './WeatherIcons';
import { Forecast } from '../interfaces/api-data-hourly';
import styles from '../styles/Timeslot.module.css';

interface TimeslotProps {
  forecast: Forecast;
}

const getHourRepresentation = (isoTime: string) => {
  const dateTime = new Date(isoTime);
  const hour = dateTime.getHours();

  return `${hour.toString().padStart(2, '0')}:00`;
};

const formatPrecipProb = (prob: number) => {
  return prob < 5 ? '<5%' : `${prob}%`;
};

const formatTemperature = (degrees: number) => {
  return `${Math.round(degrees)}${String.fromCharCode(176)}`;
};

export const Timeslot = ({ forecast }: TimeslotProps) => {
  const time = getHourRepresentation(forecast.time);
  const temperature = formatTemperature(forecast.screenTemperature);
  const precipProb = formatPrecipProb(forecast.probOfPrecipitation);

  return (
    <article className={styles.timeslot} data-testid="timeslot">
      <p>{time}</p>
      <div>
        <WeatherIcon iconNumber={forecast.significantWeatherCode} />
      </div>
      <p>{precipProb}</p>
      <p>{temperature}</p>
    </article>
  );
};
