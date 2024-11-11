import axiosInstance from "http/axiosInstance";

export const httpClient = {
  get: async (url: string, params?: object) => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  },

  post: async (url: string, data: object) => {
    const response = await axiosInstance.post(url, data);
    return response.data;
  },

  put: async (url: string, data: object) => {
    const response = await axiosInstance.put(url, data);
    return response.data;
  },

  delete: async (url: string) => {
    const response = await axiosInstance.delete(url);
    return response.data;
  }
};
