import App, { AppContext, AppProps } from 'next/app';
import '../styles/globals.css';
import Cookies from 'universal-cookie';
import { LOG_IN_COOKIE_KEY } from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req?.headers.cookie);
  const password = cookies.get(LOG_IN_COOKIE_KEY) ?? '';

  if (password === `${process.env.LOGIN_PASSWORD}`) {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;
