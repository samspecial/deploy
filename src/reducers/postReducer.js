import { GET_POST } from '../actions/types';

const initialState = {
    articleData: []
}

export default function (state = initialState, action) {
    switch (action.types) {
        case GET_POST:
            return {
                ...state
            }
        default:
            return state
    }
}