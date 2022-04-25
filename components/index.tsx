import { HourlyData } from '../interfaces/api-data-hourly';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { Login } from './login';
import { Search } from './Search';
import { Forecast } from './Forecast';
interface IndexProps {
  data: HourlyData;
  hasReadPermission: boolean;
}

export const Index = ({ hasReadPermission, data }: IndexProps) => {
  const router = useRouter();
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <main className="wrapper">
      <Navigation />
      <Search />
      <Forecast data={data} />
    </main>
  );
};
