import { render, screen } from '@testing-library/react';
import { WeatherIcon } from '.';

describe('WeatherIcons', () => {
  it('should render clear night with icon value of 0', () => {
    render(<WeatherIcon iconNumber={0} />);

    const weatherIcon = screen.getByAltText('Clear night');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Sunny day with icon value of 1', () => {
    render(<WeatherIcon iconNumber={1} />);

    const weatherIcon = screen.getByAltText('Sunny day');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Partly cloudy (night) with icon value of 2', () => {
    render(<WeatherIcon iconNumber={2} />);

    const weatherIcon = screen.getByAltText('Partly cloudy (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Sunny intervals with icon value of 3', () => {
    render(<WeatherIcon iconNumber={3} />);

    const weatherIcon = screen.getByAltText('Sunny intervals');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render unknown icon with icon value of 4', () => {
    render(<WeatherIcon iconNumber={4} />);

    const unknownIcon = screen.getByText('unknown icon');

    expect(unknownIcon).toBeInTheDocument();
  });

  it('should render Mist with icon value of 5', () => {
    render(<WeatherIcon iconNumber={5} />);

    const weatherIcon = screen.getByAltText('Mist');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Fog with icon value of 6', () => {
    render(<WeatherIcon iconNumber={6} />);

    const weatherIcon = screen.getByAltText('Fog');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Cloudy with icon value of 7', () => {
    render(<WeatherIcon iconNumber={7} />);

    const weatherIcon = screen.getByAltText('Cloudy');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Overcast with icon value of 8', () => {
    render(<WeatherIcon iconNumber={8} />);

    const weatherIcon = screen.getByAltText('Overcast');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light rain shower (night) with icon value of 9', () => {
    render(<WeatherIcon iconNumber={9} />);

    const weatherIcon = screen.getByAltText('Light rain shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light rain shower (day) with icon value of 10', () => {
    render(<WeatherIcon iconNumber={10} />);

    const weatherIcon = screen.getByAltText('Light rain shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Drizzle with icon value of 11', () => {
    render(<WeatherIcon iconNumber={11} />);

    const weatherIcon = screen.getByAltText('Drizzle');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light rain with icon value of 12', () => {
    render(<WeatherIcon iconNumber={12} />);

    const weatherIcon = screen.getByAltText('Light rain');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy rain shower (night) with icon value of 13', () => {
    render(<WeatherIcon iconNumber={13} />);

    const weatherIcon = screen.getByAltText('Heavy rain shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy rain shower (day) with icon value of 14', () => {
    render(<WeatherIcon iconNumber={14} />);

    const weatherIcon = screen.getByAltText('Heavy rain shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy rain with icon value of 15', () => {
    render(<WeatherIcon iconNumber={15} />);

    const weatherIcon = screen.getByAltText('Heavy rain');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Sleet shower (night) with icon value of 16', () => {
    render(<WeatherIcon iconNumber={16} />);

    const weatherIcon = screen.getByAltText('Sleet shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Sleet shower (day) with icon value of 17', () => {
    render(<WeatherIcon iconNumber={17} />);

    const weatherIcon = screen.getByAltText('Sleet shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Sleet with icon value of 18', () => {
    render(<WeatherIcon iconNumber={18} />);

    const weatherIcon = screen.getByAltText('Sleet');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Hail shower (night) with icon value of 19', () => {
    render(<WeatherIcon iconNumber={19} />);

    const weatherIcon = screen.getByAltText('Hail shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Hail shower (day) with icon value of 20', () => {
    render(<WeatherIcon iconNumber={20} />);

    const weatherIcon = screen.getByAltText('Hail shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Hail with icon value of 21', () => {
    render(<WeatherIcon iconNumber={21} />);

    const weatherIcon = screen.getByAltText('Hail');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light snow shower (night) with icon value of 22', () => {
    render(<WeatherIcon iconNumber={22} />);

    const weatherIcon = screen.getByAltText('Light snow shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light snow shower (day) with icon value of 23', () => {
    render(<WeatherIcon iconNumber={23} />);

    const weatherIcon = screen.getByAltText('Light snow shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Light snow with icon value of 24', () => {
    render(<WeatherIcon iconNumber={24} />);

    const weatherIcon = screen.getByAltText('Light snow');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy snow shower (night) with icon value of 25', () => {
    render(<WeatherIcon iconNumber={25} />);

    const weatherIcon = screen.getByAltText('Heavy snow shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy snow shower (day) with icon value of 26', () => {
    render(<WeatherIcon iconNumber={26} />);

    const weatherIcon = screen.getByAltText('Heavy snow shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Heavy snow with icon value of 27', () => {
    render(<WeatherIcon iconNumber={27} />);

    const weatherIcon = screen.getByAltText('Heavy snow');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Thunder shower (night) with icon value of 28', () => {
    render(<WeatherIcon iconNumber={28} />);

    const weatherIcon = screen.getByAltText('Thunder shower (night)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Thunder shower (day) with icon value of 29', () => {
    render(<WeatherIcon iconNumber={29} />);

    const weatherIcon = screen.getByAltText('Thunder shower (day)');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render Thunder with icon value of 30', () => {
    render(<WeatherIcon iconNumber={30} />);

    const weatherIcon = screen.getByAltText('Thunder');

    expect(weatherIcon).toBeInTheDocument();
  });

  it('should render unknown icon with an invalid icon value', () => {
    render(<WeatherIcon iconNumber={-1} />);

    const unknownIcon = screen.getByText('unknown icon');

    expect(unknownIcon).toBeInTheDocument();
  });
});
