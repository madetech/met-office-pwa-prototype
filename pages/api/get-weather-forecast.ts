import axios from 'axios';
import { HourlyData } from '../../interfaces/api-data-hourly';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const urlString = `${process.env.MET_OFFICE_API_BASE_URL}${req.query.frequency}`;

  const response = await axios
    .get<HourlyData>(urlString, {
      headers: {
        'X-IBM-Client-Id': `${process.env.MET_OFFICE_API_CLIENT_ID}`,
        'X-IBM-Client-Secret': `${process.env.MET_OFFICE_API_CLIENT_SECRET}`,
        accept: 'application/json',
      },
      params: {
        excludeParameterMetadata: true,
        includeLocationName: true,
        latitude: req.query.latitude,
        longitude: req.query.longitude,
      },
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log('Error', error.message);
    });

  res.status(200).json(response);
}
