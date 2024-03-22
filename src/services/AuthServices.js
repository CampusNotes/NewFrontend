import Notify from "../helpers/Notify";
import axios from "axios";

async function RegisterService(data) {
  try {
    const response = await axios.post('/api/auth/register', data);
    if (response.status === 201) {
      console.log(response);
      localStorage.setItem('auth_token', response.data.data.token);

      return true;
    }
    else {
      Notify('error', response.data.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

async function LoginService(data) {
  try {
    const response = await axios.post('/api/auth/login', data);
    console.log(response);
    if (response.status === 200) {
      console.log(response);
      localStorage.setItem('auth_token', response.data.data.token);
      return true
    }
    else {
      Notify('error', response.data.message);
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}


export {
  RegisterService,
  LoginService
}