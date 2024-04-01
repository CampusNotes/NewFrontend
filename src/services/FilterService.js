import axios from "axios";


async function GetAllFilterService() {
  const headers = {
    "Content-Type": "application/json",
    auth_token: localStorage.getItem('auth_token')
  }

  try {
    const res = await axios.get('/api/filter/allfilters', { headers })

    if (res.status === 200) {
      return res.data.data.filters;
    }
    else {
      return [];
    }

  } catch (error) {
    return error;
  }
}

export {
  GetAllFilterService
}