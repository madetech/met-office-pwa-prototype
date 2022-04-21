import getForecastData from "../requests/getForecastData";

import ApiTestComponent from "../components/api-test";
import { AppProps } from "../interfaces/api-data-hourly";

const ApiTest = ({ data }: AppProps) => {
  return (
    <ApiTestComponent data={data} />
  )
}

export default ApiTest;

export const getServerSideProps = async () => {
  const { data } = await getForecastData("hourly");
  if (!data) return { notFound: true };
  return { props: { data }};
}
