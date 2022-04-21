import axios from 'axios';

const getForecastData = async (
  frequency: 'hourly' | 'daily',
  latitude: number,
  longitude: number
) => {
  const res = await axios.get(
    `${process.env.MET_OFFICE_API_BASE_URL}${frequency}`,
    {
      headers: {
        'X-IBM-Client-Id': `${process.env.MET_OFFICE_API_CLIENT_ID}`,
        'X-IBM-Client-Secret': `${process.env.MET_OFFICE_API_CLIENT_SECRET}`,
        accept: 'application/json',
      },
      params: {
        excludeParameterMetadata: true,
        includeLocationName: true,
        latitude,
        longitude,
      },
    }
  );

  return res;
};

export default getForecastData;
