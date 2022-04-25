import Image from 'next/image';
import styles from '../../styles/Navigation.module.css';

interface WeatherIconProps {
  iconNumber: number;
}

export const WeatherIcon = ({ iconNumber }: WeatherIconProps) => {
  return icons.get(iconNumber) || <p>unknown icon</p>;
};

const icons = new Map([
  [
    0,
    <Image
      src={`/assets/weather-icons/0-clear-night.svg`}
      width={48}
      height={48}
      alt="Clear night"
      key="0"
    />,
  ],
]);
