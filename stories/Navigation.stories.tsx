import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Navigation } from '../components/Navigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Navigation,
  title: 'Navigation',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = () => <Navigation />;
export const Main = Template.bind({});
Template.args = {};
