import { HourlyData } from '../interfaces/api-data-hourly';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { Login } from './login';
import { Search } from './Search';
import { Forecast } from './Forecast';
import { Location } from './Location';
import styles from '../styles/Index.module.css';
import { Video } from './Video';

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
    <>
      <Navigation />
      <main className={styles.pageContainer}>
        <Search />
        <Location />
        <Forecast data={data} />
        <Video />
      </main>
    </>
  );
};
