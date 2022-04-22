import Image from 'next/image';

interface WeatherIconProps {
  iconNumber: number;
}

export const WeatherIcon = ({ iconNumber }: WeatherIconProps) => {
  return (
    <Image
      src={`/assets/weather-icons/${iconNumber}.svg`}
      width={48}
      height={48}
      alt={altText.get(iconNumber)}
    />
  );
};

const altText = new Map([[0, 'Clear night']]);
