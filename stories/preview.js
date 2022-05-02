import * as NextImage from 'next/image';
import '../styles/globals.css';
import '../styles/Navigation.module.css';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const newViewports = {
  iPadHorizontal: {
    name: 'ipad - horizontal',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  iPadVertical: {
    name: 'ipad - vertical',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

export const viewports = {
  ...MINIMAL_VIEWPORTS,
  ...newViewports,
};
