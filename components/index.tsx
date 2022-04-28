import { HourlyDataLastUpdated } from '../interfaces/api-data-hourly';
import { Navigation } from './Navigation';
import { useRouter } from 'next/router';
import { Login } from './login';
import { Search } from './Search';
import { Forecast } from './Forecast';
import { Location } from './Location';
import styles from '../styles/Index.module.css';
import { Video } from './Video';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';

interface IndexProps {
  data: HourlyDataLastUpdated;
  hasReadPermission: boolean;
  videoData: YoutubePlaylistApiResponse;
}

export const Index = ({ hasReadPermission, data, videoData }: IndexProps) => {
  const router = useRouter();
  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div className={styles.pageContainer}>
      <Navigation />
      <main className={styles.contentContainer}>
        <Search />
        <Location />
        <Forecast data={data} />
        <Video videoData={videoData} />
      </main>
    </div>
  );
};
