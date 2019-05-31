import axios from 'axios'

const Api =
  axios.create({
    // baseURL: process.env.VUE_APP_BASE_URL,
    baseURL: 'https://reqres.in/api',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 5000 // request timeout
  })

// interceptors.setup(Api)
// interceptors.checkToken(Api)

export default Api
