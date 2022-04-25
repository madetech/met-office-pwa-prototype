import axios from 'axios';
import getForecastData from './getForecastData';

jest.mock('axios');

describe('getForecastData', () => {
  const LATITUDE = 12.34;
  const LONGITUDE = 67.89;
  const FREQUENCY = 'hourly';
  const BASE_URL =
    'https://foo.appdomain.cloud/metoffice/production/v0/forecasts/point/';
  const FORECAST_CLIENT_ID = 'foo';
  const FORECAST_CLIENT_SECRET = 'bar';

  beforeAll(() => {
    process.env.MET_OFFICE_API_BASE_URL = BASE_URL;
    process.env.MET_OFFICE_API_CLIENT_ID = FORECAST_CLIENT_ID;
    process.env.MET_OFFICE_API_CLIENT_SECRET = FORECAST_CLIENT_SECRET;
  });

  it('should call to axios with expected requirements', async () => {
    await getForecastData(FREQUENCY, LATITUDE, LONGITUDE);

    expect(axios.get).toBeCalledWith(`${BASE_URL}${FREQUENCY}`, {
      headers: {
        'X-IBM-Client-Id': FORECAST_CLIENT_ID,
        'X-IBM-Client-Secret': FORECAST_CLIENT_SECRET,
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
