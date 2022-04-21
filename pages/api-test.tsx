import axios from "axios";

import ApiTestComponent from "../components/api-test";
import { AppProps } from "../interfaces/api-data-hourly";

const ApiTest = ({ data }: AppProps) => {
  return (
    <ApiTestComponent data={data} />
  )
}

export default ApiTest;

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.MET_OFFICE_API_BASE_URL}hourly`, {
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

  if (!data) return { notFound: true };
  return { props: { data }};
}

// Manchester:
// lat: 53.4808
// long: 2.2426

// St Ives:
// lat: 50.2113
// long: -5.4813
