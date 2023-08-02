import axios from "axios";

export type AxiosMethods = "get" | "post" | "put" | "delete";
type IAxiosCall = {
  method: AxiosMethods;
  endpoint: string;
  id?: string;
  body?: any;
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/", // Replace with your base URL
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosCall = async <T>({
  method,
  endpoint,
  id,
  body,
}: IAxiosCall): Promise<T> => {
  let url = `${endpoint}`;
  if (id) {
    url = url.concat(`/${id}`);
  }
  try {
    const response = await axiosInstance({ method, url, data: body });
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
