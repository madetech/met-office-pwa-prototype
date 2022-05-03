import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Search } from '../components/Search';
import { viewports } from './preview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Search,
  title: 'Search',
  parameters: {
    viewport: {
      viewports,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Search> = () => <Search />;

export const Default = Template.bind({});
