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

export interface Location {
  name: string;
}

export interface Properties {
  location: Location;
  requestPointDistance: number;
  timeSeries: Forecast[];
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Feature {
  geometry: Geometry;
  properties: Properties;
}

export interface AppProps {
  data: {
    features: Feature[];
    type: string;
  }
}