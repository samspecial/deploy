import { GET_POST, ADD_POST, DELETE_POST } from '../actions/types';

const initialState = {
    articleData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state
            };
        case ADD_POST:
            return {
                ...state,
                articleData: [action.payload, ...state.articleData]
            };
        case DELETE_POST:
            return {
                articleData: state.articleData.filter(article => article.id !== action.payload)
            };
        default:
            return state
    }
}

