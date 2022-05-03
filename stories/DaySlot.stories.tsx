import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Dayslot } from '../components/Dayslot';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Dayslot,
  title: 'Dayslot',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dayslot> = (args) => (
  <Dayslot {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  forecast: {
    dayMaxScreenTemperature: 20,
    nightMinScreenTemperature: 8,
    nightSignificantWeatherCode: 2,
    time: '2022-05-02T18:25:42.518Z',
  },
};
