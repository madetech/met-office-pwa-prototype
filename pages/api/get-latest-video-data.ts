import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { YoutubePlaylistApiResponse } from '../../interfaces/youtube-api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const uploadPlaylistId = 'UU40Tw2tFuMzK305mi7nj8rg';

  const urlString = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${uploadPlaylistId}&part=snippet&maxResults=1`;

  const response = await axios.get<YoutubePlaylistApiResponse>(urlString);

  res.status(200).json(response.data);
}
