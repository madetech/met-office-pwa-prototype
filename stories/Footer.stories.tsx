import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Footer } from '../components/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Footer,
  title: 'Footer',
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = () => <Footer />;
export const Main = Template.bind({});
Template.args = {};
