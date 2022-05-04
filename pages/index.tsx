import getForecastData from '../requests/getForecastData';
import { HourlyDataLastUpdated } from '../interfaces/api-data-hourly';
import { Index } from '../components';
import { getLatestVideoData } from '../requests/getLatestVideoData';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import { NextApiRequest, NextPageContext } from 'next';
import { NextServer } from 'next/dist/server/next';
import Cookies from 'universal-cookie';
import { LOCATION_COOKIE_LAT, LOCATION_COOKIE_LON } from '../constants';
interface HomeProps {
  hasReadPermission: boolean;
  lastKnownLocationData?: HourlyDataLastUpdated;
  data: HourlyDataLastUpdated;
  videoData: YoutubePlaylistApiResponse;
}

export default function Home({
  hasReadPermission,
  lastKnownLocationData,
  data,
  videoData,
}: HomeProps) {
  return (
    <Index
      hasReadPermission={hasReadPermission}
      lastKnownLocationData={lastKnownLocationData}
      data={data}
      videoData={videoData}
    />
  );
}

export const getServerSideProps = async ({ req }: NextPageContext) => {
  // const stIves = [50.2113, -5.4813];
  // const grantham = [52.9122, -0.642];

  const cambridge = [52.2075, 0.124];
  const cookie = new Cookies(req?.headers.cookie);
  const locationLat = cookie.get(LOCATION_COOKIE_LAT);
  const locationLon = cookie.get(LOCATION_COOKIE_LON);

  const [fixedLocation, lastKnownLocation, latestVideoData] = await Promise.all(
    [
      getForecastData('hourly', cambridge[0], cambridge[1]),
      locationLat && locationLon
        ? getForecastData('hourly', locationLat, locationLon)
        : Promise.resolve(undefined),
      getLatestVideoData(),
    ]
  );

  if (!fixedLocation) return { notFound: true };
  return {
    props: {
      data: {
        ...fixedLocation.data,
        lastUpdated: new Date().toISOString(),
      },
      lastKnownLocationData: lastKnownLocation
        ? {
            ...lastKnownLocation.data,
            lastUpdated: new Date().toISOString(),
          }
        : null,
      videoData: latestVideoData.data,
    },
  };
};
