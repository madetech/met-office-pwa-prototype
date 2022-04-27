import axios from 'axios';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';

export const getLatestVideoData = async () => {
  const uploadPlaylistId = 'UU40Tw2tFuMzK305mi7nj8rg';

  const urlString = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${uploadPlaylistId}&part=snippet&maxResults=1`;

  const response = await axios.get<YoutubePlaylistApiResponse>(urlString);

  return response;
};
