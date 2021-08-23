import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ?  window.location.protocol + "//" + window.location.host : 'http://localhost:1337';

const apiService = (method, url, params = {}) => {
  return axios({
    method,
    url: baseUrl + url,
    data: params,
  })
  .then(response => response.data)
  .catch(error => error);
};

export default apiService;
