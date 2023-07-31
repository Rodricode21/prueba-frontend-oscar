import axios from "axios";
import { API_ENDPOINT_MOVIES } from "../api/Api";

export const getMovies = async () => {
  try {
    const res = await axios.get(API_ENDPOINT_MOVIES);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
