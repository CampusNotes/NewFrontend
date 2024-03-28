import Notify from '../helpers/Notify'
import axios from 'axios'

const headers = {
  "Content-Type": "application/json",
  "auth_token": localStorage.getItem('auth_token')
}

async function AddProductService(data) {
  try {
    const response = await axios.post('/api/product/newproduct', data, { headers })

    console.log(response);

    if (response.status === 201) {
      return true;
    }
    else {
      return false;
    }

  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

async function GetAllProducts() {
  try {
    const response = await axios.get('/api/product/allproducts', { headers })

    if (response.status === 200) {
      return response.data.data.products;
    }
    else {
      return [];
    }

  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

export {
  AddProductService,
  GetAllProducts
}