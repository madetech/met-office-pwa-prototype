import { HourlyDataLastUpdated } from '../interfaces/api-data-hourly';
import { Navigation } from './Navigation';
import { Search } from './Search';
import { Forecast } from './Forecast';
import { Location } from './Location';
import styles from '../styles/Index.module.css';
import { Video } from './Video';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import { Footer } from './Footer';

interface IndexProps {
  lastKnownLocationData: HourlyDataLastUpdated | null;
  data: HourlyDataLastUpdated;
  videoData: YoutubePlaylistApiResponse;
}

export const Index = ({
  data,
  lastKnownLocationData,
  videoData,
}: IndexProps) => {
  return (
    <div className={styles.pageContainer}>
      <Navigation />
      <main className={styles.contentContainer}>
        <Search />
        <Location lastKnownLocationData={lastKnownLocationData} />
        <Forecast data={data} isUserLocation={false} />
        <Video videoData={videoData} />
      </main>
      <Footer />
    </div>
  );
};
