import App, { AppContext, AppProps } from 'next/app';
import '../styles/globals.css';
import Cookies from 'universal-cookie';
import {
  LOCATION_COOKIE_LAT,
  LOCATION_COOKIE_LON,
  LOG_IN_COOKIE_KEY,
} from '../constants';
import Head from 'next/head';
import { HourlyData } from '../interfaces/api-data-hourly';
import getForecastData from '../requests/getForecastData';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req?.headers.cookie);
  const password = cookies.get(LOG_IN_COOKIE_KEY) ?? '';

  if (`${process.env.REQUIRE_PASSWORD}` !== 'true') {
    appProps.pageProps.hasReadPermission = true;
  }

  if (password === `${process.env.LOGIN_PASSWORD}`) {
    appProps.pageProps.hasReadPermission = true;
  }

  const locationLat = cookies.get(LOCATION_COOKIE_LAT);
  const locationLon = cookies.get(LOCATION_COOKIE_LON);

  let lastKnownLocationData: HourlyData | undefined;

  if (locationLat && locationLon) {
    const lastKnownLocationForecast = await getForecastData(
      'hourly',
      locationLat,
      locationLon
    );
    lastKnownLocationData = lastKnownLocationForecast.data;
  }

  appProps.pageProps.lastKnownLocationData = lastKnownLocationData
    ? {
        ...lastKnownLocationData,
        lastUpdated: new Date().toISOString(),
      }
    : undefined;

  return { ...appProps };
};

export default MyApp;

const Header = () => {
  return (
    <Head>
      <meta name="application-name" content="Met Office PWA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta
        name="description"
        content="PWA made for the Met Office by Made Tech"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/met-office-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="180x180"
        href="/assets/met-office-logo.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Met Office Demo</title>
    </Head>
  );
};
