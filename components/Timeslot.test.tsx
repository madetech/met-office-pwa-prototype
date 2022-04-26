import { render, screen } from '@testing-library/react';
import { Timeslot } from './Timeslot';
import { Forecast } from '../interfaces/api-data-hourly';

describe('timeslot', () => {
  let forecast: Forecast;

  beforeEach(() => {
    forecast = {
      time: '2022-04-25T08:00Z',
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
    };
  });

  it('should display forecast time', () => {
    render(<Timeslot forecast={forecast} />);

    const time = screen.getByText('09:00');

    expect(time).toBeInTheDocument();
  });

  it('should display forecast correctly for midnight', () => {
    forecast.time = '2022-04-25T23:00Z';

    render(<Timeslot forecast={forecast} />);

    const time = screen.getByText('00:00');

    expect(time).toBeInTheDocument();
  });

  it('should display each hourly forecast temperature', () => {
    render(<Timeslot forecast={forecast} />);

    const temperature = screen.getByText('13°');

    expect(temperature).toBeInTheDocument();
  });

  it('should precipitation chance as <5% if the chance is less than 5 %', () => {
    render(<Timeslot forecast={forecast} />);

    const precipitationChance = screen.getByText('<5%');

    expect(precipitationChance).toBeInTheDocument();
  });
});
