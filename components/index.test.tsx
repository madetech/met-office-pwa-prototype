import { render, screen } from '@testing-library/react';
import { Index } from '.';
import { HourlyData } from '../interfaces/api-data-hourly';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { myProp: 'myValue' },
  }),
}));

describe('Index', () => {
  it('should display login form when read permission is false', () => {
    render(<Index hasReadPermission={false} data={hourlyData} />);

    const passwordField = screen.getByText('Password');

    expect(passwordField).toBeInTheDocument();
  });
});

const hourlyData: HourlyData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-5.4813, 50.2113, 24.0],
      },
      properties: {
        requestPointDistance: 0.1208,
        modelRunDate: '2022-04-25T11:00Z',
        location: {
          name: 'St. Ives',
        },
        timeSeries: [
          {
            time: '2022-04-25T11:00Z',
            screenTemperature: 12.56,
            maxScreenAirTemp: 12.56,
            minScreenAirTemp: 12.25,
            screenDewPointTemperature: 6.94,
            feelsLikeTemperature: 9.49,
            windSpeed10m: 7.36,
            windDirectionFrom10m: 123,
            windGustSpeed10m: 9.26,
            max10mWindGust: 9.26,
            visibility: 21570,
            screenRelativeHumidity: 69.42,
            mslp: 101520,
            uvIndex: 5,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T12:00Z',
            screenTemperature: 12.99,
            maxScreenAirTemp: 13.04,
            minScreenAirTemp: 12.56,
            screenDewPointTemperature: 7.04,
            feelsLikeTemperature: 10.15,
            windSpeed10m: 6.67,
            windDirectionFrom10m: 131,
            windGustSpeed10m: 8.55,
            max10mWindGust: 8.55,
            visibility: 21010,
            screenRelativeHumidity: 68.18,
            mslp: 101543,
            uvIndex: 6,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T13:00Z',
            screenTemperature: 13.36,
            maxScreenAirTemp: 13.37,
            minScreenAirTemp: 12.99,
            screenDewPointTemperature: 7.05,
            feelsLikeTemperature: 10.8,
            windSpeed10m: 5.94,
            windDirectionFrom10m: 125,
            windGustSpeed10m: 7.43,
            max10mWindGust: 7.91,
            visibility: 20159,
            screenRelativeHumidity: 66.82,
            mslp: 101596,
            uvIndex: 5,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T14:00Z',
            screenTemperature: 13.61,
            maxScreenAirTemp: 13.66,
            minScreenAirTemp: 13.36,
            screenDewPointTemperature: 6.97,
            feelsLikeTemperature: 11.4,
            windSpeed10m: 5.07,
            windDirectionFrom10m: 131,
            windGustSpeed10m: 6.53,
            max10mWindGust: 6.68,
            visibility: 21413,
            screenRelativeHumidity: 65.6,
            mslp: 101598,
            uvIndex: 4,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T15:00Z',
            screenTemperature: 13.58,
            maxScreenAirTemp: 13.61,
            minScreenAirTemp: 13.52,
            screenDewPointTemperature: 6.69,
            feelsLikeTemperature: 11.49,
            windSpeed10m: 4.77,
            windDirectionFrom10m: 121,
            windGustSpeed10m: 6.15,
            max10mWindGust: 6.45,
            visibility: 22046,
            screenRelativeHumidity: 64.45,
            mslp: 101620,
            uvIndex: 3,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T16:00Z',
            screenTemperature: 13.47,
            maxScreenAirTemp: 13.58,
            minScreenAirTemp: 13.44,
            screenDewPointTemperature: 6.12,
            feelsLikeTemperature: 11.44,
            windSpeed10m: 4.54,
            windDirectionFrom10m: 108,
            windGustSpeed10m: 5.69,
            max10mWindGust: 6.04,
            visibility: 23032,
            screenRelativeHumidity: 62.46,
            mslp: 101630,
            uvIndex: 3,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T17:00Z',
            screenTemperature: 13.02,
            maxScreenAirTemp: 13.47,
            minScreenAirTemp: 13.01,
            screenDewPointTemperature: 6.11,
            feelsLikeTemperature: 11.31,
            windSpeed10m: 3.85,
            windDirectionFrom10m: 102,
            windGustSpeed10m: 4.71,
            max10mWindGust: 5.48,
            visibility: 22880,
            screenRelativeHumidity: 64.2,
            mslp: 101640,
            uvIndex: 2,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T18:00Z',
            screenTemperature: 12.44,
            maxScreenAirTemp: 13.03,
            minScreenAirTemp: 12.42,
            screenDewPointTemperature: 5.57,
            feelsLikeTemperature: 10.73,
            windSpeed10m: 3.76,
            windDirectionFrom10m: 89,
            windGustSpeed10m: 4.81,
            max10mWindGust: 4.84,
            visibility: 24288,
            screenRelativeHumidity: 64.26,
            mslp: 101666,
            uvIndex: 1,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T19:00Z',
            screenTemperature: 11.22,
            maxScreenAirTemp: 12.44,
            minScreenAirTemp: 11.2,
            screenDewPointTemperature: 5.38,
            feelsLikeTemperature: 9.52,
            windSpeed10m: 3.6,
            windDirectionFrom10m: 91,
            windGustSpeed10m: 4.59,
            max10mWindGust: 4.78,
            visibility: 23702,
            screenRelativeHumidity: 68.85,
            mslp: 101704,
            uvIndex: 1,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T20:00Z',
            screenTemperature: 9.71,
            maxScreenAirTemp: 11.22,
            minScreenAirTemp: 9.61,
            screenDewPointTemperature: 6.07,
            feelsLikeTemperature: 7.95,
            windSpeed10m: 3.37,
            windDirectionFrom10m: 89,
            windGustSpeed10m: 4.91,
            max10mWindGust: 4.93,
            visibility: 20161,
            screenRelativeHumidity: 79.85,
            mslp: 101774,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T21:00Z',
            screenTemperature: 8.59,
            maxScreenAirTemp: 9.58,
            minScreenAirTemp: 8.44,
            screenDewPointTemperature: 5.63,
            feelsLikeTemperature: 7.04,
            windSpeed10m: 2.71,
            windDirectionFrom10m: 104,
            windGustSpeed10m: 4.07,
            max10mWindGust: 4.62,
            visibility: 19478,
            screenRelativeHumidity: 82.53,
            mslp: 101814,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T22:00Z',
            screenTemperature: 8.26,
            maxScreenAirTemp: 8.59,
            minScreenAirTemp: 8.22,
            screenDewPointTemperature: 4.99,
            feelsLikeTemperature: 6.78,
            windSpeed10m: 2.53,
            windDirectionFrom10m: 102,
            windGustSpeed10m: 4.57,
            max10mWindGust: 4.58,
            visibility: 20377,
            screenRelativeHumidity: 80.51,
            mslp: 101820,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-25T23:00Z',
            screenTemperature: 8.05,
            maxScreenAirTemp: 8.26,
            minScreenAirTemp: 7.97,
            screenDewPointTemperature: 4.57,
            feelsLikeTemperature: 6.59,
            windSpeed10m: 2.47,
            windDirectionFrom10m: 111,
            windGustSpeed10m: 4.63,
            max10mWindGust: 4.69,
            visibility: 21225,
            screenRelativeHumidity: 79.27,
            mslp: 101834,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 1,
          },
          {
            time: '2022-04-26T00:00Z',
            screenTemperature: 7.8,
            maxScreenAirTemp: 8.05,
            minScreenAirTemp: 7.76,
            screenDewPointTemperature: 4.48,
            feelsLikeTemperature: 6.35,
            windSpeed10m: 2.43,
            windDirectionFrom10m: 105,
            windGustSpeed10m: 4.32,
            max10mWindGust: 4.57,
            visibility: 21114,
            screenRelativeHumidity: 79.93,
            mslp: 101840,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 1,
          },
          {
            time: '2022-04-26T01:00Z',
            screenTemperature: 7.88,
            maxScreenAirTemp: 7.89,
            minScreenAirTemp: 7.69,
            screenDewPointTemperature: 4.54,
            feelsLikeTemperature: 6.22,
            windSpeed10m: 2.67,
            windDirectionFrom10m: 113,
            windGustSpeed10m: 4.7,
            max10mWindGust: 4.71,
            visibility: 21006,
            screenRelativeHumidity: 80.01,
            mslp: 101840,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T02:00Z',
            screenTemperature: 7.93,
            maxScreenAirTemp: 7.95,
            minScreenAirTemp: 7.88,
            screenDewPointTemperature: 4.5,
            feelsLikeTemperature: 6.09,
            windSpeed10m: 2.96,
            windDirectionFrom10m: 116,
            windGustSpeed10m: 5.24,
            max10mWindGust: 5.33,
            visibility: 20965,
            screenRelativeHumidity: 79.66,
            mslp: 101843,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T03:00Z',
            screenTemperature: 7.92,
            maxScreenAirTemp: 7.94,
            minScreenAirTemp: 7.87,
            screenDewPointTemperature: 4.68,
            feelsLikeTemperature: 5.98,
            windSpeed10m: 3.07,
            windDirectionFrom10m: 116,
            windGustSpeed10m: 5.65,
            max10mWindGust: 5.94,
            visibility: 20745,
            screenRelativeHumidity: 80.83,
            mslp: 101840,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T04:00Z',
            screenTemperature: 7.92,
            maxScreenAirTemp: 7.97,
            minScreenAirTemp: 7.89,
            screenDewPointTemperature: 5.34,
            feelsLikeTemperature: 5.77,
            windSpeed10m: 3.45,
            windDirectionFrom10m: 120,
            windGustSpeed10m: 6.42,
            max10mWindGust: 6.93,
            visibility: 19206,
            screenRelativeHumidity: 84.31,
            mslp: 101853,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T05:00Z',
            screenTemperature: 7.99,
            maxScreenAirTemp: 8.02,
            minScreenAirTemp: 7.92,
            screenDewPointTemperature: 5.9,
            feelsLikeTemperature: 5.66,
            windSpeed10m: 3.8,
            windDirectionFrom10m: 126,
            windGustSpeed10m: 7.13,
            max10mWindGust: 7.85,
            visibility: 17715,
            screenRelativeHumidity: 87.29,
            mslp: 101877,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T06:00Z',
            screenTemperature: 8.47,
            maxScreenAirTemp: 8.48,
            minScreenAirTemp: 7.99,
            screenDewPointTemperature: 6.45,
            feelsLikeTemperature: 6.19,
            windSpeed10m: 3.92,
            windDirectionFrom10m: 128,
            windGustSpeed10m: 7.11,
            max10mWindGust: 7.89,
            visibility: 17035,
            screenRelativeHumidity: 87.82,
            mslp: 101927,
            uvIndex: 1,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T07:00Z',
            screenTemperature: 9.89,
            maxScreenAirTemp: 9.9,
            minScreenAirTemp: 8.47,
            screenDewPointTemperature: 6.85,
            feelsLikeTemperature: 7.73,
            windSpeed10m: 4.31,
            windDirectionFrom10m: 121,
            windGustSpeed10m: 7.18,
            max10mWindGust: 7.52,
            visibility: 19164,
            screenRelativeHumidity: 82.59,
            mslp: 101963,
            uvIndex: 2,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T08:00Z',
            screenTemperature: 11.17,
            maxScreenAirTemp: 11.19,
            minScreenAirTemp: 9.89,
            screenDewPointTemperature: 7.04,
            feelsLikeTemperature: 8.71,
            windSpeed10m: 5.47,
            windDirectionFrom10m: 111,
            windGustSpeed10m: 7.71,
            max10mWindGust: 7.71,
            visibility: 23526,
            screenRelativeHumidity: 76.79,
            mslp: 102003,
            uvIndex: 3,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T09:00Z',
            screenTemperature: 12.02,
            maxScreenAirTemp: 12.04,
            minScreenAirTemp: 11.17,
            screenDewPointTemperature: 7.06,
            feelsLikeTemperature: 9.4,
            windSpeed10m: 6.06,
            windDirectionFrom10m: 114,
            windGustSpeed10m: 8.45,
            max10mWindGust: 8.45,
            visibility: 25250,
            screenRelativeHumidity: 72.26,
            mslp: 102032,
            uvIndex: 3,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T10:00Z',
            screenTemperature: 12.59,
            maxScreenAirTemp: 12.72,
            minScreenAirTemp: 12.02,
            screenDewPointTemperature: 6.27,
            feelsLikeTemperature: 9.67,
            windSpeed10m: 6.79,
            windDirectionFrom10m: 105,
            windGustSpeed10m: 9.29,
            max10mWindGust: 9.29,
            visibility: 27446,
            screenRelativeHumidity: 65.83,
            mslp: 102056,
            uvIndex: 4,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T11:00Z',
            screenTemperature: 12.88,
            maxScreenAirTemp: 13.07,
            minScreenAirTemp: 12.59,
            screenDewPointTemperature: 5.82,
            feelsLikeTemperature: 10.06,
            windSpeed10m: 6.47,
            windDirectionFrom10m: 107,
            windGustSpeed10m: 8.91,
            max10mWindGust: 9.15,
            visibility: 30329,
            screenRelativeHumidity: 62.65,
            mslp: 102092,
            uvIndex: 5,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 1,
          },
          {
            time: '2022-04-26T12:00Z',
            screenTemperature: 13.01,
            maxScreenAirTemp: 13.16,
            minScreenAirTemp: 12.73,
            screenDewPointTemperature: 4.83,
            feelsLikeTemperature: 9.92,
            windSpeed10m: 7.03,
            windDirectionFrom10m: 113,
            windGustSpeed10m: 9.8,
            max10mWindGust: 9.8,
            visibility: 32716,
            screenRelativeHumidity: 57.89,
            mslp: 102119,
            uvIndex: 6,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T13:00Z',
            screenTemperature: 13.19,
            maxScreenAirTemp: 13.33,
            minScreenAirTemp: 13.01,
            screenDewPointTemperature: 3.94,
            feelsLikeTemperature: 9.96,
            windSpeed10m: 7.27,
            windDirectionFrom10m: 110,
            windGustSpeed10m: 10.02,
            max10mWindGust: 10.02,
            visibility: 33984,
            screenRelativeHumidity: 53.8,
            mslp: 102122,
            uvIndex: 5,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T14:00Z',
            screenTemperature: 13.13,
            maxScreenAirTemp: 13.19,
            minScreenAirTemp: 13.12,
            screenDewPointTemperature: 3.35,
            feelsLikeTemperature: 9.85,
            windSpeed10m: 7.36,
            windDirectionFrom10m: 111,
            windGustSpeed10m: 10.17,
            max10mWindGust: 10.17,
            visibility: 35517,
            screenRelativeHumidity: 51.65,
            mslp: 102122,
            uvIndex: 5,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T15:00Z',
            screenTemperature: 13.08,
            maxScreenAirTemp: 13.13,
            minScreenAirTemp: 13.06,
            screenDewPointTemperature: 2.88,
            feelsLikeTemperature: 9.84,
            windSpeed10m: 7.28,
            windDirectionFrom10m: 111,
            windGustSpeed10m: 10.13,
            max10mWindGust: 10.13,
            visibility: 35949,
            screenRelativeHumidity: 49.85,
            mslp: 102114,
            uvIndex: 4,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T16:00Z',
            screenTemperature: 12.76,
            maxScreenAirTemp: 13.08,
            minScreenAirTemp: 12.75,
            screenDewPointTemperature: 2.92,
            feelsLikeTemperature: 9.78,
            windSpeed10m: 6.64,
            windDirectionFrom10m: 107,
            windGustSpeed10m: 9.23,
            max10mWindGust: 9.24,
            visibility: 35736,
            screenRelativeHumidity: 51.07,
            mslp: 102124,
            uvIndex: 3,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T17:00Z',
            screenTemperature: 12.35,
            maxScreenAirTemp: 12.76,
            minScreenAirTemp: 12.31,
            screenDewPointTemperature: 3.22,
            feelsLikeTemperature: 9.69,
            windSpeed10m: 5.87,
            windDirectionFrom10m: 99,
            windGustSpeed10m: 8.02,
            max10mWindGust: 8.02,
            visibility: 34248,
            screenRelativeHumidity: 53.54,
            mslp: 102127,
            uvIndex: 2,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T18:00Z',
            screenTemperature: 11.69,
            maxScreenAirTemp: 12.35,
            minScreenAirTemp: 11.67,
            screenDewPointTemperature: 3.47,
            feelsLikeTemperature: 9.24,
            windSpeed10m: 5.38,
            windDirectionFrom10m: 94,
            windGustSpeed10m: 7.18,
            max10mWindGust: 7.18,
            visibility: 32154,
            screenRelativeHumidity: 56.82,
            mslp: 102137,
            uvIndex: 1,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T19:00Z',
            screenTemperature: 10.72,
            maxScreenAirTemp: 11.69,
            minScreenAirTemp: 10.7,
            screenDewPointTemperature: 3.76,
            feelsLikeTemperature: 8.34,
            windSpeed10m: 5.08,
            windDirectionFrom10m: 89,
            windGustSpeed10m: 6.71,
            max10mWindGust: 6.71,
            visibility: 30150,
            screenRelativeHumidity: 62.44,
            mslp: 102154,
            uvIndex: 1,
            significantWeatherCode: 1,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T20:00Z',
            screenTemperature: 9.54,
            maxScreenAirTemp: 10.72,
            minScreenAirTemp: 9.52,
            screenDewPointTemperature: 4.16,
            feelsLikeTemperature: 7.12,
            windSpeed10m: 4.75,
            windDirectionFrom10m: 86,
            windGustSpeed10m: 6.38,
            max10mWindGust: 6.38,
            visibility: 26959,
            screenRelativeHumidity: 70.19,
            mslp: 102179,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T21:00Z',
            screenTemperature: 8.96,
            maxScreenAirTemp: 9.54,
            minScreenAirTemp: 8.92,
            screenDewPointTemperature: 4.55,
            feelsLikeTemperature: 6.45,
            windSpeed10m: 4.66,
            windDirectionFrom10m: 86,
            windGustSpeed10m: 6.3,
            max10mWindGust: 6.3,
            visibility: 25321,
            screenRelativeHumidity: 75.19,
            mslp: 102206,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T22:00Z',
            screenTemperature: 8.58,
            maxScreenAirTemp: 8.96,
            minScreenAirTemp: 8.56,
            screenDewPointTemperature: 4.51,
            feelsLikeTemperature: 6.15,
            windSpeed10m: 4.41,
            windDirectionFrom10m: 86,
            windGustSpeed10m: 6.36,
            max10mWindGust: 6.36,
            visibility: 24175,
            screenRelativeHumidity: 76.74,
            mslp: 102228,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-26T23:00Z',
            screenTemperature: 8.38,
            maxScreenAirTemp: 8.58,
            minScreenAirTemp: 8.23,
            screenDewPointTemperature: 4.64,
            feelsLikeTemperature: 5.75,
            windSpeed10m: 4.69,
            windDirectionFrom10m: 84,
            windGustSpeed10m: 6.51,
            max10mWindGust: 6.51,
            visibility: 23945,
            screenRelativeHumidity: 78.61,
            mslp: 102258,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T00:00Z',
            screenTemperature: 8.35,
            maxScreenAirTemp: 8.62,
            minScreenAirTemp: 8.24,
            screenDewPointTemperature: 4.57,
            feelsLikeTemperature: 5.83,
            windSpeed10m: 4.54,
            windDirectionFrom10m: 87,
            windGustSpeed10m: 7.05,
            max10mWindGust: 7.05,
            visibility: 24410,
            screenRelativeHumidity: 78.34,
            mslp: 102275,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T01:00Z',
            screenTemperature: 8.34,
            maxScreenAirTemp: 8.39,
            minScreenAirTemp: 8.27,
            screenDewPointTemperature: 4.5,
            feelsLikeTemperature: 5.54,
            windSpeed10m: 5.04,
            windDirectionFrom10m: 84,
            windGustSpeed10m: 7.33,
            max10mWindGust: 7.33,
            visibility: 24820,
            screenRelativeHumidity: 77.97,
            mslp: 102295,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T02:00Z',
            screenTemperature: 8.28,
            maxScreenAirTemp: 8.34,
            minScreenAirTemp: 8.24,
            screenDewPointTemperature: 4.4,
            feelsLikeTemperature: 5.51,
            windSpeed10m: 5.01,
            windDirectionFrom10m: 90,
            windGustSpeed10m: 8.04,
            max10mWindGust: 8.04,
            visibility: 24408,
            screenRelativeHumidity: 77.73,
            mslp: 102307,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T03:00Z',
            screenTemperature: 8.33,
            maxScreenAirTemp: 8.43,
            minScreenAirTemp: 8.24,
            screenDewPointTemperature: 4.56,
            feelsLikeTemperature: 5.45,
            windSpeed10m: 5.25,
            windDirectionFrom10m: 90,
            windGustSpeed10m: 8.33,
            max10mWindGust: 8.33,
            visibility: 24761,
            screenRelativeHumidity: 78.48,
            mslp: 102309,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T04:00Z',
            screenTemperature: 8.49,
            maxScreenAirTemp: 8.49,
            minScreenAirTemp: 8.33,
            screenDewPointTemperature: 4.99,
            feelsLikeTemperature: 5.64,
            windSpeed10m: 5.45,
            windDirectionFrom10m: 94,
            windGustSpeed10m: 8.57,
            max10mWindGust: 8.57,
            visibility: 24540,
            screenRelativeHumidity: 80.17,
            mslp: 102334,
            uvIndex: 0,
            significantWeatherCode: 0,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T05:00Z',
            screenTemperature: 8.6,
            maxScreenAirTemp: 8.6,
            minScreenAirTemp: 8.49,
            screenDewPointTemperature: 5.49,
            feelsLikeTemperature: 5.61,
            windSpeed10m: 5.83,
            windDirectionFrom10m: 103,
            windGustSpeed10m: 9.22,
            max10mWindGust: 9.22,
            visibility: 22736,
            screenRelativeHumidity: 82.64,
            mslp: 102366,
            uvIndex: 0,
            significantWeatherCode: 2,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T06:00Z',
            screenTemperature: 8.93,
            maxScreenAirTemp: 8.93,
            minScreenAirTemp: 8.6,
            screenDewPointTemperature: 5.97,
            feelsLikeTemperature: 5.81,
            windSpeed10m: 6.37,
            windDirectionFrom10m: 101,
            windGustSpeed10m: 9.92,
            max10mWindGust: 9.92,
            visibility: 22241,
            screenRelativeHumidity: 83.62,
            mslp: 102396,
            uvIndex: 1,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 0,
          },
          {
            time: '2022-04-27T07:00Z',
            screenTemperature: 9.64,
            maxScreenAirTemp: 9.64,
            minScreenAirTemp: 8.93,
            screenDewPointTemperature: 5.98,
            feelsLikeTemperature: 6.49,
            windSpeed10m: 6.85,
            windDirectionFrom10m: 97,
            windGustSpeed10m: 10.05,
            max10mWindGust: 10.05,
            visibility: 23335,
            screenRelativeHumidity: 79.02,
            mslp: 102438,
            uvIndex: 2,
            significantWeatherCode: 7,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 4,
          },
          {
            time: '2022-04-27T08:00Z',
            screenTemperature: 10.37,
            maxScreenAirTemp: 10.37,
            minScreenAirTemp: 9.64,
            screenDewPointTemperature: 5.93,
            feelsLikeTemperature: 7.21,
            windSpeed10m: 7.3,
            windDirectionFrom10m: 96,
            windGustSpeed10m: 10.39,
            max10mWindGust: 10.41,
            visibility: 26716,
            screenRelativeHumidity: 74.06,
            mslp: 102477,
            uvIndex: 2,
            significantWeatherCode: 7,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 3,
          },
          {
            time: '2022-04-27T09:00Z',
            screenTemperature: 11.03,
            maxScreenAirTemp: 11.05,
            minScreenAirTemp: 10.37,
            screenDewPointTemperature: 5.49,
            feelsLikeTemperature: 7.92,
            windSpeed10m: 7.32,
            windDirectionFrom10m: 93,
            windGustSpeed10m: 10.56,
            max10mWindGust: 11.5,
            visibility: 28465,
            screenRelativeHumidity: 67.72,
            mslp: 102517,
            uvIndex: 3,
            significantWeatherCode: 3,
            precipitationRate: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
            probOfPrecipitation: 1,
          },
          {
            time: '2022-04-27T10:00Z',
            screenTemperature: 11.4,
            screenDewPointTemperature: 5.12,
            feelsLikeTemperature: 8.24,
            windSpeed10m: 7.43,
            windDirectionFrom10m: 94,
            windGustSpeed10m: 10.67,
            visibility: 28773,
            screenRelativeHumidity: 64.3,
            mslp: 102537,
            uvIndex: 4,
            significantWeatherCode: 3,
            precipitationRate: 0,
            probOfPrecipitation: 1,
            max10mWindGust: 0,
            maxScreenAirTemp: 0,
            minScreenAirTemp: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
          },
          {
            time: '2022-04-27T11:00Z',
            screenTemperature: 11.7,
            screenDewPointTemperature: 4.96,
            feelsLikeTemperature: 8.72,
            windSpeed10m: 6.92,
            windDirectionFrom10m: 93,
            windGustSpeed10m: 10.0,
            visibility: 29059,
            screenRelativeHumidity: 62.07,
            mslp: 102564,
            uvIndex: 5,
            significantWeatherCode: 3,
            precipitationRate: 0,
            probOfPrecipitation: 1,
            max10mWindGust: 0,
            maxScreenAirTemp: 0,
            minScreenAirTemp: 0,
            totalPrecipAmount: 0,
            totalSnowAmount: 0,
          },
        ],
      },
    },
  ],
};
