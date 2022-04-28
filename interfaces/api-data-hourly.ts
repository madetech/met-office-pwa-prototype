export interface Forecast {
  feelsLikeTemperature: number;
  max10mWindGust: number;
  maxScreenAirTemp: number;
  minScreenAirTemp: number;
  mslp: number;
  precipitationRate: number;
  probOfPrecipitation: number;
  screenDewPointTemperature: number;
  screenRelativeHumidity: number;
  screenTemperature: number;
  significantWeatherCode: number;
  time: string;
  totalPrecipAmount: number;
  totalSnowAmount: number;
  uvIndex: number;
  visibility: number;
  windDirectionFrom10m: number;
  windGustSpeed10m: number;
  windSpeed10m: number;
}

interface Location {
  name: string;
}

interface Properties {
  location: Location;
  modelRunDate: string;
  requestPointDistance: number;
  timeSeries: Forecast[];
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

export interface HourlyData {
  features: Feature[];
  type: string;
}

export interface HourlyDataLastUpdated extends HourlyData {
  // ISO8601 represented datetime string
  lastUpdated: string;
}
