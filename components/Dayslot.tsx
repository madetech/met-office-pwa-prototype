import { WeatherIcon } from './WeatherIcons';
import { DailyForecast } from '../interfaces/api-data-daily';
import styles from '../styles/Dayslot.module.css';

interface DayslotProps {
  forecast: DailyForecast;
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
    <article className={styles.dayslot} data-testid="dayslot">
      <p>{getDatePresentation(forecast.time)}</p>
      <div>
        <WeatherIcon iconNumber={forecast.nightSignificantWeatherCode} />
      </div>
      <p className={styles.maxTemp}>
        {formatTemperature(forecast.dayMaxScreenTemperature)}
      </p>
      <p className={styles.minTemp}>
        {formatTemperature(forecast.nightMinScreenTemperature)}
      </p>
    </article>
  );
};
