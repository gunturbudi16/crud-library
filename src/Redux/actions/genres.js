import Axios from "axios";

export const getAllGenres = () => {
  return {
    type: "GET_GENRES",
    payload: Axios.get("/api/v1/genres/")
  };
};
