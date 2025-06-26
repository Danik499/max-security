import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

interface AxiosBaseQueryArgs {
  url: string;
  method: Method;
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
}

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method, data, params }: AxiosBaseQueryArgs) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (error: any) {
      if (error instanceof AxiosError) {
        return {
          error: {
            status: error.response?.status,
            data: error.response?.data || error.message,
          },
        };
      }

      return error;
    }
  };

export default axiosBaseQuery;
