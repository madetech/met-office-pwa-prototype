import axios from 'axios';
import { getLatestVideoData } from './getLatestVideoData';

jest.mock('axios');

describe('getLatestVideoData', () => {
  const YOUTUBE_API_KEY = 'YOUTUBE-API-KEY';
  const uploadPlaylistId = 'UU40Tw2tFuMzK305mi7nj8rg';

  beforeAll(() => {
    process.env.YOUTUBE_API_KEY = YOUTUBE_API_KEY;
  });

  it('should call to axios with expected requirements', async () => {
    await getLatestVideoData();

    expect(axios.get).toBeCalledWith(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${uploadPlaylistId}&part=snippet&maxResults=1`
    );
  });
});
