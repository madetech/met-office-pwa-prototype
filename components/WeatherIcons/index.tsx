import Image from 'next/image';

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
  [
    1,
    <Image
      src={`/assets/weather-icons/1-sunny-day.svg`}
      width={48}
      height={48}
      alt="Sunny day"
      key="1"
    />,
  ],
  [
    2,
    <Image
      src={`/assets/weather-icons/2-partly-cloudy-night.svg`}
      width={48}
      height={48}
      alt="Partly cloudy (night)"
      key="2"
    />,
  ],
  [
    3,
    <Image
      src={`/assets/weather-icons/3-sunny-intervals.svg`}
      width={48}
      height={48}
      alt="Sunny intervals"
      key="3"
    />,
  ],
  [
    5,
    <Image
      src={`/assets/weather-icons/5-mist.svg`}
      width={48}
      height={48}
      alt="Mist"
      key="5"
    />,
  ],
  [
    6,
    <Image
      src={`/assets/weather-icons/6-fog.svg`}
      width={48}
      height={48}
      alt="Fog"
      key="6"
    />,
  ],
  [
    7,
    <Image
      src={`/assets/weather-icons/7-cloudy.svg`}
      width={48}
      height={48}
      alt="Cloudy"
      key="7"
    />,
  ],
  [
    8,
    <Image
      src={`/assets/weather-icons/8-overcast.svg`}
      width={48}
      height={48}
      alt="Overcast"
      key="8"
    />,
  ],
  [
    9,
    <Image
      src={`/assets/weather-icons/9-light-rain-shower-night.svg`}
      width={48}
      height={48}
      alt="Light rain shower (night)"
      key="9"
    />,
  ],
  [
    10,
    <Image
      src={`/assets/weather-icons/10-light-rain-shower-day.svg`}
      width={48}
      height={48}
      alt="Light rain shower (day)"
      key="10"
    />,
  ],
  [
    11,
    <Image
      src={`/assets/weather-icons/11-drizzle.svg`}
      width={48}
      height={48}
      alt="Drizzle"
      key="11"
    />,
  ],
  [
    12,
    <Image
      src={`/assets/weather-icons/12-light-rain.svg`}
      width={48}
      height={48}
      alt="Light rain"
      key="12"
    />,
  ],
  [
    13,
    <Image
      src={`/assets/weather-icons/13-heavy-rain-shower-night.svg`}
      width={48}
      height={48}
      alt="Heavy rain shower (night)"
      key="13"
    />,
  ],
  [
    14,
    <Image
      src={`/assets/weather-icons/14-heavy-rain-shower-day.svg`}
      width={48}
      height={48}
      alt="Heavy rain shower (day)"
      key="14"
    />,
  ],
  [
    15,
    <Image
      src={`/assets/weather-icons/15-heavy-rain.svg`}
      width={48}
      height={48}
      alt="Heavy rain"
      key="15"
    />,
  ],
  [
    16,
    <Image
      src={`/assets/weather-icons/16-sleet-shower-night.svg`}
      width={48}
      height={48}
      alt="Sleet shower night"
      key="16"
    />,
  ],
  [
    17,
    <Image
      src={`/assets/weather-icons/17-sleet-shower-day.svg`}
      width={48}
      height={48}
      alt="Sleet shower day"
      key="17"
    />,
  ],
  [
    18,
    <Image
      src={`/assets/weather-icons/18-sleet.svg`}
      width={48}
      height={48}
      alt="Sleet"
      key="18"
    />,
  ],
  [
    19,
    <Image
      src={`/assets/weather-icons/19-hail-shower-night.svg`}
      width={48}
      height={48}
      alt="Hail shower (night)"
      key="19"
    />,
  ],
  [
    20,
    <Image
      src={`/assets/weather-icons/20-hail-shower-day.svg`}
      width={48}
      height={48}
      alt="Hail shower (day)"
      key="20"
    />,
  ],
  [
    21,
    <Image
      src={`/assets/weather-icons/21-hail.svg`}
      width={48}
      height={48}
      alt="Hail"
      key="21"
    />,
  ],
  [
    22,
    <Image
      src={`/assets/weather-icons/22-light-snow-shower-night.svg`}
      width={48}
      height={48}
      alt="Light snow shower (night)"
      key="22"
    />,
  ],
  [
    23,
    <Image
      src={`/assets/weather-icons/23-light-snow-shower-day.svg`}
      width={48}
      height={48}
      alt="Light snow shower (day)"
      key="23"
    />,
  ],
  [
    24,
    <Image
      src={`/assets/weather-icons/24-light-snow.svg`}
      width={48}
      height={48}
      alt="Light snow"
      key="24"
    />,
  ],
  [
    25,
    <Image
      src={`/assets/weather-icons/25-heavy-snow-shower-night.svg`}
      width={48}
      height={48}
      alt="Heavy snow shower (night)"
      key="25"
    />,
  ],
  [
    26,
    <Image
      src={`/assets/weather-icons/26-heavy-snow-shower-day.svg`}
      width={48}
      height={48}
      alt="Heavy snow shower (day)"
      key="26"
    />,
  ],
  [
    27,
    <Image
      src={`/assets/weather-icons/27-heavy-snow.svg`}
      width={48}
      height={48}
      alt="Heavy snow"
      key="27"
    />,
  ],
  [
    28,
    <Image
      src={`/assets/weather-icons/28-thunder-shower-night.svg`}
      width={48}
      height={48}
      alt="Thunder shower (night)"
      key="28"
    />,
  ],
  [
    29,
    <Image
      src={`/assets/weather-icons/29-thunder-shower-day.svg`}
      width={48}
      height={48}
      alt="Thunder shower (day)"
      key="29"
    />,
  ],
  [
    30,
    <Image
      src={`/assets/weather-icons/30-thunder.svg`}
      width={48}
      height={48}
      alt="Thunder"
      key="30"
    />,
  ],
]);
