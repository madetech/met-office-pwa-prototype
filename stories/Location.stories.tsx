import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Location } from '../components/Location';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Location,
  title: 'Location',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Location> = () => (
  <Location lastKnownLocationData={null} />
);

export const Default = Template.bind({});
