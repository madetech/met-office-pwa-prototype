export interface DailyForecast {
  time: string;
  nightSignificantWeatherCode: number;
  dayMaxScreenTemperature: number;
  nightMinScreenTemperature: number;
}

interface Properties {
  location: Location;
  modelRunDate: string;
  requestPointDistance: number;
  timeSeries: DailyForecast[];
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface DailyData {
  forecasts: DailyForecast[];
  features: Feature[];
  type: string;
}
