import React from 'react';
import { ComponentStory } from '@storybook/react';

import { WeatherIcon } from '../components/WeatherIcons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: WeatherIcon,
  title: 'Weather Icon',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  iconNumber: 0,
};

export const Unknown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unknown.args = {
  iconNumber: -1,
};
