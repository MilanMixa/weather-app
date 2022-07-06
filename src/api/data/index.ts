import axios from "../axiosInstance";

const APIKey = process.env.REACT_APP_API_KEY;

export const getGeo = (city: string, country: string) =>
  axios.get(`/geo/1.0/direct?q=${city},${country}&limit=10&appid=${APIKey}`);

export const getCityWeather = (lat: string, lon: string) =>
  axios.get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`);
