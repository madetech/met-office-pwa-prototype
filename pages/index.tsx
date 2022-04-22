import getForecastData from '../requests/getForecastData';
import { Index } from '../components';
import { HourlyData } from '../interfaces/api-data-hourly';

interface HomeProps {
  hasReadPermission: boolean;
  data: HourlyData;
}

export default function Home({ hasReadPermission, data }: HomeProps) {
  return <Index hasReadPermission={hasReadPermission} data={data} />;
}

export const getServerSideProps = async () => {
  const { data } = await getForecastData('hourly', 50.2113, -5.4813);
  if (!data) return { notFound: true };
  return { props: { data } };
};
