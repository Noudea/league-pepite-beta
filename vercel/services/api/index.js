import axios from 'axios'

const apiCall = async (method, url, body) => {
  const config = {
    method: method,
    url: `http://localhost:8000/api/${url}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: body
  }

  const response = await axios(config)
  return response.data
}

export default apiCall
