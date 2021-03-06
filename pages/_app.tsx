import App, { AppContext, AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

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
      <meta name="theme-color" content="#122a3a" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

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
