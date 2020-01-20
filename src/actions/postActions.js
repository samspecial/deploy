import { GET_POST, ADD_POST, DELETE_POST } from './types';

export const getPost = () => {
    return {
        type: GET_POST
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export const addPost = (article) => {
    return {
        type: ADD_POST,
        payload: article
    }
}