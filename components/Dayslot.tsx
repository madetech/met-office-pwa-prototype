import { WeatherIcon } from './WeatherIcons';
import { Forecast } from '../interfaces/api-data-daily';
import styles from '../styles/Timeslot.module.css';

interface DayslotProps {
  forecast: Forecast;
}

const getDatePresentation = (isoTime: string) => {
  const dateTime = new Date(isoTime);

  return dateTime.toString().substring(0, 10);
};

const formatTemperature = (degrees: number) => {
  return `${Math.round(degrees)}${String.fromCharCode(176)}`;
};

export const Dayslot = ({ forecast }: DayslotProps) => {
  return (
    <article className={styles.timeslot} data-testid="timeslot">
      <p>{getDatePresentation(forecast.time)}</p>
      <div>
        <WeatherIcon iconNumber={forecast.nightSignificantWeatherCode} />
      </div>
      <p>{formatTemperature(forecast.dayMaxScreenTemperature)}</p>
      <p>{formatTemperature(forecast.nightMinScreenTemperature)}</p>
    </article>
  );
};
