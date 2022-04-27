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
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  res.status(200).json(response.data);
}
