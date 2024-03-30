import axios from "axios";
import Notify from "../helpers/Notify";


async function PlaceOrderService(data) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: localStorage.getItem('auth_token')
  }
  try {
    const response = await axios.post('/api/bill/createbill', data, { headers });

    if (response.status === 201) {
      Notify('success', 'Bill generated now generate qr');
      return response.data.data.BillId
    }
    else {
      Notify('error', 'Not able to generate bill please try again later');
      return ''
    }
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}


export {
  PlaceOrderService
}