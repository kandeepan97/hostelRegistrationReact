import axios from "axios";
import { GET_ERRORS } from "./types";

export const createWarden = (warden, history) => async dispatch => {
  try {

    const res = await axios.post("http://localhost:8080/api/warden", warden);
    history.push("/dashboard");

      console.log("Hello");

  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};