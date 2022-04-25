import axios from 'axios';
import getForecastData from './getForecastData';

jest.mock('axios');

describe('getForecastData', () => {
  const LATITUDE = 12.34;
  const LONGITUDE = 67.89;
  const FREQUENCY = 'hourly';
  const BASE_URL =
    'https://foo.appdomain.cloud/metoffice/production/v0/forecasts/point/';

  it('should call to axios with expected requirements', async () => {
    process.env.MET_OFFICE_API_BASE_URL = BASE_URL;

    await getForecastData(FREQUENCY, LATITUDE, LONGITUDE);

    expect(axios.get).toBeCalledWith(`${BASE_URL}${FREQUENCY}`, {
      headers: {
        'X-IBM-Client-Id': 'undefined',
        'X-IBM-Client-Secret': 'undefined',
        accept: 'application/json',
      },
      params: {
        excludeParameterMetadata: true,
        includeLocationName: true,
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },
    });
  });
});
