import * as NextImage from 'next/image';
import '../styles/globals.css';
import '../styles/Navigation.module.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
