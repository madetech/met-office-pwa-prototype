import getForecastData from '../requests/getForecastData';
import { HourlyDataLastUpdated } from '../interfaces/api-data-hourly';
import { Index } from '../components';
import { getLatestVideoData } from '../requests/getLatestVideoData';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';

interface HomeProps {
  hasReadPermission: boolean;
  data: HourlyDataLastUpdated;
  videoData: YoutubePlaylistApiResponse;
}

export default function Home({
  hasReadPermission,
  data,
  videoData,
}: HomeProps) {
  return (
    <Index
      hasReadPermission={hasReadPermission}
      data={data}
      videoData={videoData}
    />
  );
}

export const getServerSideProps = async () => {
  // const stIves = [50.2113, -5.4813];
  // const grantham = [52.9122, -0.642];
  const cambridge = [52.2075, 0.124];
  const { data } = await getForecastData('hourly', cambridge[0], cambridge[1]);
  const { data: videoData } = await getLatestVideoData();
  if (!data) return { notFound: true };
  return {
    props: {
      data: {
        ...data,
        lastUpdated: new Date().toISOString(),
      },
      videoData,
    },
  };
};
