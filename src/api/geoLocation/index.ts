import axios from "../axiosInstance";

const APIKey = process.env.REACT_APP_API_KEY;

export const getGeo = (city: string) =>
  axios.get(`/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`);
