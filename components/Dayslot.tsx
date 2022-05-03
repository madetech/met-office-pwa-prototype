import { WeatherIcon } from './WeatherIcons';
import { DailyForecast } from '../interfaces/api-data-daily';
import styles from '../styles/Timeslot.module.css';

interface DayslotProps {
  forecast: DailyForecast;
}

const getDatePresentation = (isoTime: string) => {
  const dateTime = new Date(isoTime);
  return dateTime.toLocaleDateString('en-GB', { weekday: 'short' });
};

const formatTemperature = (degrees: number) => {
  return `${Math.round(degrees)}${String.fromCharCode(176)}`;
};

export const Dayslot = ({ forecast }: DayslotProps) => {
  return (
    <article className={styles.timeslot} data-testid="dayslot">
      <p>{getDatePresentation(forecast.time)}</p>
      <WeatherIcon iconNumber={forecast.daySignificantWeatherCode} />
      <p>{formatTemperature(forecast.dayMaxScreenTemperature)}</p>
      <p>{formatTemperature(forecast.nightMinScreenTemperature)}</p>
    </article>
  );
};
