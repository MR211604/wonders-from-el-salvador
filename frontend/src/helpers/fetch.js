const baseURL = process.env.REACT_APP_API_URL

export const fetchWithoutToken = async (endpoint, data, method) => {

  if (method === 'GET') {
    const response = await fetch(`${baseURL}/${endpoint}`);
    return await response.json();
  } else {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json();
  }

}

export const fetchWithToken = async (endpoint, data, method = 'GET') => {

  const token = localStorage.getItem('token') || '';
  if (method === 'GET') {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      headers: {
        'x-token': token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      credentials: "include"
    })
    return await response.json();
  } else {
    const response = await fetch(`${baseURL}/${endpoint}`, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    })
    return await response.json();
  }
}