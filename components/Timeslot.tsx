import { WeatherIcon } from './WeatherIcons';
import { Forecast } from '../interfaces/api-data-hourly';
import styles from '../styles/Timeslot.module.css';

interface TimeslotProps {
  forecast: Forecast;
}

const formatTime = (gmtString: string, isBst: boolean) => {
  const gmt = gmtString.split('T')[1];
  const hour = isBst
    ? Number(gmt.split(':')[0]) + 1
    : Number(gmt.split(':')[0]);
  return `${hour}:00`;
};

const formatPrecipProb = (prob: number) => {
  return prob < 5 ? '<5%' : `${prob}%`;
};

const formatTemperature = (degrees: number) => {
  return `${Math.round(degrees)}${String.fromCharCode(176)}`;
};

export const Timeslot = ({ forecast }: TimeslotProps) => {
  const time = formatTime(forecast.time, true);
  const temperature = formatTemperature(forecast.screenTemperature);
  const precipProb = formatPrecipProb(forecast.probOfPrecipitation);

  return (
    <article className={styles.timeslot}>
      <div>{time}</div>
      <div>
        <WeatherIcon iconNumber={forecast.significantWeatherCode} />
      </div>
      <div>{precipProb}</div>
      <div>{temperature}</div>
    </article>
  );
};
