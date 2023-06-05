import axios, { AxiosResponse } from 'axios';
import { IPostWithAd, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080',
});

// todo (6) api 작성

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostById = (id: string) => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: string, title: string, contents: string, tag: string) => {
  return instance.put(`/posts/${id}`, {
    title,
    contents,
    tag,
  });
};

export const deletePostById = (id: string) => {
  return instance.delete(`/posts/${id}`);
};
