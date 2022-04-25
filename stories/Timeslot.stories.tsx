import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Timeslot } from '../components/Timeslot';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Timeslot,
  title: 'Timeslot',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timeslot> = (args) => (
  <Timeslot {...args} />
);

const timeSeries = {
  time: '2022-04-25T11:00Z',
  screenTemperature: 12.56,
  maxScreenAirTemp: 12.56,
  minScreenAirTemp: 12.25,
  screenDewPointTemperature: 6.94,
  feelsLikeTemperature: 9.49,
  windSpeed10m: 7.36,
  windDirectionFrom10m: 123,
  windGustSpeed10m: 9.26,
  max10mWindGust: 9.26,
  visibility: 21570,
  screenRelativeHumidity: 69.42,
  mslp: 101520,
  uvIndex: 5,
  significantWeatherCode: 3,
  precipitationRate: 0,
  totalPrecipAmount: 0,
  totalSnowAmount: 0,
  probOfPrecipitation: 0,
};

export const TimeslotDisplay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TimeslotDisplay.args = {
  forecast: timeSeries,
};
