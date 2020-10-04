import axios from "axios";
import { GET_ERRORS } from "./types";

export const createroom = (room, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/api/room", room);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};