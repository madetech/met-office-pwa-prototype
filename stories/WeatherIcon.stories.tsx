import React from 'react';
import { ComponentStory } from '@storybook/react';

import { WeatherIcon } from '../components/WeatherIcons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: WeatherIcon,
  title: 'Weather Icons',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
);

export const ClearNight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearNight.args = {
  iconNumber: 0,
};

export const Unknown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unknown.args = {
  iconNumber: -1,
};
