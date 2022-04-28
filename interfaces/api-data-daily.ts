export interface Forecast {
  time: string;
  nightSignificantWeatherCode: number;
  dayMaxScreenTemperature: number;
  nightMinScreenTemperature: number;
}

export interface DailyData {
  forecasts: Forecast[];
  type: string;
}
