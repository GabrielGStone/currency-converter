import axios from "axios";

const useRequest = () => {
  // const headers = {
  //   Authorization: `Bearer 95ICOhWOsKiiIHU3cZB4usvt39qZJIew`,
  // };

  const get = async (endpoint: string) => {
    let res: any;

    try {
      const response = await axios.get(endpoint);
      res = response;
    } catch (err: any) {
      res = err.response;

      res = {
        ...err.response,
        data: {
          ...err.response?.data,
          error: err.response?.data?.error || true,
        },
      };
    }

    return res?.data;
  };

  return { get };
};

export default useRequest;
