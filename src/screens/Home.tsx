import { useEffect } from "react";
import ConverterText from "../components/ConverterText/ConverterText";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import useRequest from "../hooks/useRequest";
import InputSelectCurrency from "../components/InputSelectCurrency/InputSelectCurrency";

const Home = () => {
  const { get } = useRequest();

  const getCurrency = async () => {
    const res = await get(
      "http://api.exchangeratesapi.io/v1/latest?access_key=02e796fe2622dc1aa273799943a96cce&format=1"
    );
    console.log(res);
    return res;
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <ConverterText />
        <InputSelectCurrency />
        <InputSelectCurrency />
      </Layout>
    </>
  );
};

export default Home;
