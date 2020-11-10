import axios from "axios";
import { GET_ERRORS,SET_CURRENT_STUDENT} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewStudent = (newStudent, history) => async dispatch => {
  try {
    await axios.post(`http://localhost:8080/api/register`, newStudent);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


export const login = (LoginRequest,history) => async dispatch => {
  try {
    const {email, password, role1} = LoginRequest;
    const login = {email,password};
    console.log(login);
    // post => Login Request
    if(role1 == 'student'){
      const res = await axios.post(`http://localhost:8080/api/loginstudent`, login);
      // extract token from res.data
      const { token,role } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      console.log(role);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_STUDENT,
        payload: decoded
      });
  
      history.push("/studentDashboard");
    }
    else if(role1 == 'warden'){
      const res = await axios.post(`http://localhost:8080/api/loginwarden`, login);
      // extract token from res.data
      const { token,role } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      console.log(role);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_STUDENT,
        payload: decoded
      });
  
      history.push("/wardenDashboard");
    }else if(role1 == 'admin'){
      const res = await axios.post(`http://localhost:8080/api/loginadmin`, login);
      // extract token from res.data
      const { token,role } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      console.log(role);
      // set our token in header ***
      setJWTToken(token);
      // decode token on React
      const decoded = jwt_decode(token);
      // dispatch to our securityReducer
      dispatch({
        type: SET_CURRENT_STUDENT,
        payload: decoded
      });
  
      history.push("/adminDashboard");
    }else{
      throw new Error('Who are you?')
    }
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
