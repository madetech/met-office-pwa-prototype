import { render, screen } from '@testing-library/react';
import { Dayslot } from './Dayslot';
import { DailyForecast } from '../interfaces/api-data-daily';

describe('dayslot', () => {
  let forecast: DailyForecast;

  beforeEach(() => {
    forecast = {
      time: '2022-04-26T00:00Z',
      nightSignificantWeatherCode: 7,
      dayMaxScreenTemperature: 13.69,
      nightMinScreenTemperature: 4.81,
    };
  });

  it('should display forecast date', () => {
    render(<Dayslot forecast={forecast} />);

    const formattedDate = screen.getByText('Tue Apr 26');

    expect(formattedDate).toBeInTheDocument();
  });

  it('should display each daily forecast maximum temperature', () => {
    render(<Dayslot forecast={forecast} />);

    const maxTemperature = screen.getByText('14°');

    expect(maxTemperature).toBeInTheDocument();
  });

  it('should display each daily forecast minimum temperature', () => {
    render(<Dayslot forecast={forecast} />);

    const minTemperature = screen.getByText('5°');

    expect(minTemperature).toBeInTheDocument();
  });
});
