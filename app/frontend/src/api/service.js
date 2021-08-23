import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:1337';

const post = (url, params = {}) => {
  console.log(baseUrl + url);
  return axios({
    method: 'post',
    url: baseUrl + url,
    data: params,
  })
  .then(response => response.data)
  .catch(error => error);
};

export default post;
