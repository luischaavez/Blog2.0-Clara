import axios from "axios";

const url = "/api";
export const BASE_URL = url;

export const register = async (user) => {
  const res = await axios.post(`${url}/auth/register`, user);
  return res.data;
};

export const login = async (user) => {
  const res = await axios.post(`${url}/auth/login`, user);
  return res.data;
};

export const uploadFile = async (post) => {
  console.log(post);
  try {
    const res = await axios.post(`${url}/upload`, post);
    return res.data;
  } catch (error) {
    console.log("Error while calling uploadFile API ", error);
  }
};

export const createPost = async (post) => {
  try {
    const res = await axios.post(`${url}/posts`, post);
    return res.data;
  } catch (error) {
    console.log("Error while calling createPost API ", error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${url}/posts`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPosts API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${url}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    return await axios.put(`${url}/posts/${id}`, post);
  } catch (error) {
    console.log("Error while calling updatePost API ", error);
  }
};

export const deletePost = async (id) => {
  try {
    return await axios.delete(`${url}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deletePost API ", error);
  }
};

export const newComment = async (comment) => {
  try {
    return await axios.post(`${url}/comment/new/`, comment);
  } catch (error) {
    console.log("Error while calling newComment API ", error);
  }
};

export const getComments = async (id) => {
  try {
    let response = await axios.get(`${url}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getComments API ", error);
  }
};

export const deleteComment = async (id) => {
  try {
    return await axios.delete(`${url}/comment/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleteComments API ", error);
  }
};
