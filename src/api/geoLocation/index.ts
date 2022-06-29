import axios from "axios";

const APIKey = process.env.ApiKey;

export const getGeo = (city: any, limit: any) =>
  axios.get(`/geo/1.0/direct?q=${city},&limit=${limit}&appid=${APIKey}`);
