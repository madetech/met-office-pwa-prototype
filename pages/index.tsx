import { useRouter } from 'next/router';
import { Login } from '../components/login';
import getForecastData from '../requests/getForecastData';
// import { Index } from '../components';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Forecast } from '../components/Forecast';
import { HourlyData } from '../interfaces/api-data-hourly';

interface HomeProps {
  hasReadPermission: boolean;
  data: HourlyData;
}

export default function Home({ hasReadPermission, data }: HomeProps) {
  const router = useRouter();
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  // return <Index data={data} />;
  return (
    <main className="wrapper">
      <Header />
      <Search />
      <Forecast data={data} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const stIves = [50.2113, -5.4813];
  const grantham = [52.9122, -0.642];
  const cambridge = [52.2075, 0.124];
  const { data } = await getForecastData('hourly', cambridge[0], cambridge[1]);
  if (!data) return { notFound: true };
  return { props: { data } };
};
