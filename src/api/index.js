import axios from 'axios'

const DOMAIN = process.env.VUE_APP_SERVER_BASE_URL

// api용

const request = (method, url, data) => {
  return axios({
    method,
    url: url[0] === 'h' ? url : DOMAIN + url,
    params: method === 'get' ? data : undefined,
    data: method != 'get' ? data : undefined,
  })
    .then(result => result.data)
    .catch(result => {
      throw result.response
    })
}

export default request
