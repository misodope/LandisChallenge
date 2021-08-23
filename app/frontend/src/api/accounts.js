import apiService from './service';

const list = async (data) => {
  try {
    const response = await apiService('post', '/api/accounts/list', data);

    return response;
  } catch (e) {
    throw e;
  }
}

const getStatistics = async () => {
  try {
    const response = await apiService('post', '/api/accounts/statistics');

    return response;
  } catch (e) {
    throw e;
  }
}

export default {
  list,
  getStatistics,
}