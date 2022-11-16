import { useEffect } from "react";
import ConverterText from "../components/ConverterText/ConverterText";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import useRequest from "../hooks/useRequest";
import InputSelectCurrency from "../components/InputSelectCurrency/InputSelectCurrency";

const Home = () => {
  const { get } = useRequest();

  const getCurrency = async () => {
    const headers = {
      Authorization: `Bearer 95ICOhWOsKiiIHU3cZB4usvt39qZJIew`,
    };

    const res = await get(
      "https://v6.exchangerate-api.com/v6/95ICOhWOsKiiIHU3cZB4usvt39qZJIew/latest/EUR",
      { headers }
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
