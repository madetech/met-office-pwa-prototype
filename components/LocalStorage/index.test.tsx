import { HourlyDataLastUpdated } from '../../interfaces/api-data-hourly';
import useStorage from './index';

describe('Local storage', () => {
  it('should return undefined if key is unknown', () => {
    const result = useStorage().getItem('unknown-key');

    expect(result).toBe(undefined);
  });

  it('should return value if key is known', () => {
    const keyName = 'known-key';
    const keyValue = 'this is the test value';

    useStorage().setItem(keyName, keyValue);

    const result = useStorage().getItem(keyName);

    useStorage().removeItem(keyName);

    expect(result).toBe(keyValue);
  });

  it('should return hourly data for key', () => {
    const keyName = 'hourly-data';

    useStorage().setItem(keyName, JSON.stringify(hourlyData));

    const result = JSON.parse(useStorage().getItem(keyName));

    useStorage().removeItem(keyName);

    expect(result).not.toBeNull();
    expect(result.features[0].properties.timeSeries.length).toBe(2);
    expect(result.features[0].properties.timeSeries[0].time).toBe(
      '2022-04-25T11:00Z'
    );
    expect(result.features[0].properties.timeSeries[1].time).toBe(
      '2022-04-25T12:00Z'
    );
    expect(result.lastUpdated).toBe('2022-04-26T10:17Z');
  });
});

const hourlyData: HourlyDataLastUpdated = {
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
        ],
      },
    },
  ],
  lastUpdated: '2022-04-26T10:17Z',
};
