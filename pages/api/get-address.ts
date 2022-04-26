import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const urlString = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.latitude},${req.query.longitude}&key=${process.env.GOOGLE_API_KEY}&language=en`;

  const response = await axios.get(urlString);

  res.status(200).json(response.data.results[0].formatted_address);
}
