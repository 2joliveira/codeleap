import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function fetcher<T>(url?: string, options: AxiosRequestConfig = {}) {
  const response = await api.get<T>(url ?? "", options);
  return response.data;
};
