import axios from 'axios';

const API_URL_BASE = process.env.REACT_APP_API_URL_BASE;

export const getListPosts = async () => {
  const response = await axios({
    method: 'get',
    url: `${API_URL_BASE}/posts`,
  });
  return response.data;
};

export const createPost = async (data) => {
  const response = await axios({
    method: 'post',
    url: `${API_URL_BASE}/posts`,
    data,
  });
  return response.data;
};
