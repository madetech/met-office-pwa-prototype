import axios from "axios";

const getForecastData = async (frequency: string) => {
  const res = await axios.get(`${process.env.MET_OFFICE_API_BASE_URL}${frequency}`, {
    headers: {
      "X-IBM-Client-Id": `${process.env.MET_OFFICE_API_CLIENT_ID}`,
      "X-IBM-Client-Secret": `${process.env.MET_OFFICE_API_CLIENT_SECRET}`,
      accept: "application/json"
    },
    params: {
      "excludeParameterMetadata": true,
      "includeLocationName": true,
      "latitude": 50.2113,
      "longitude": -5.4813
    }
  });

  return res;
}

export default getForecastData;

// Manchester:
// lat: 53.4808
// long: 2.2426

// St Ives:
// lat: 50.2113
// long: -5.4813