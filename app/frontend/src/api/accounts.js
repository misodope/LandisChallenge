import post from './service';

const list = async (data) => {
  try {
    const response = await post('/api/accounts/list', data);

    return response;
  } catch (e) {
    throw e;
  }
}

export default {
  list,
}