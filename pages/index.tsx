import getForecastData from '../requests/getForecastData';
import { HourlyData } from '../interfaces/api-data-hourly';
import { Index } from '../components';

interface HomeProps {
  hasReadPermission: boolean;
  data: HourlyData;
}

export default function Home({ hasReadPermission, data }: HomeProps) {
  return <Index hasReadPermission={hasReadPermission} data={data} />;
}

export const getServerSideProps = async () => {
  // const stIves = [50.2113, -5.4813];
  // const grantham = [52.9122, -0.642];
  const cambridge = [52.2075, 0.124];
  const { data } = await getForecastData('hourly', cambridge[0], cambridge[1]);
  if (!data) return { notFound: true };
  return { props: { data } };
};
