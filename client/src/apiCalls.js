import axios from 'axios'
import { getApiUrl } from './rootFile'


export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await axios.post(getApiUrl("login"), userCredentials)
        dispatch({ type: "LOGIN_SUCCESS", payload: res })
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error })
    }

}

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(getApiUrl("login"), {
        email: email,
        password: password,
      });
      return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err.response);
    }
  };