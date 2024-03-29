import Notify from '../helpers/Notify'
import axios from 'axios'



async function AddProductService(data) {
  const headers = {
    "Content-Type": "application/json",
    auth_token: localStorage.getItem('auth_token')
  }
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

async function GetAllProductsService() {
  const headers = {
    "Content-Type": "application/json",
    auth_token: localStorage.getItem('auth_token')
  }
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


async function DeleteProductService(productId) {
  const headers = {
    "Content-Type": "application/json",
    "auth_token": localStorage.getItem('auth_token')
  }
  try {
    console.log(headers);
    const data = {
      productId: productId
    }
    const response = await axios.post('/api/product/removeproduct', data, { headers })

    console.log(response);

    if (response.status === 200) {
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

export {
  AddProductService,
  GetAllProductsService,
  DeleteProductService
}