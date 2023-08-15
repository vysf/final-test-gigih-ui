/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:5002';

async function getVideos() {
  try {
    const response = await axios.get(`${BASE_URL}/v1/videos`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/v1/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getVideo(id) {
  try {
    const response = await axios.get(`${BASE_URL}/v1/videos/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getCommentsFromVideo(id) {
  try {
    const response = await axios.get(`${BASE_URL}/v1/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function postCommentToVideo(id, body) {
  try {
    const response = await axios.post(`${BASE_URL}/v1/comments/${id}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 'success') {
      return { error: true, data: null };
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getVideos, getProducts, getVideo, getCommentsFromVideo, postCommentToVideo,
};
