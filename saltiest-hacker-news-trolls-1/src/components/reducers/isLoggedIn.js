import {START_POSTING, POST_SUCCESS, POST_FAILURE} from "../actions"

const initialState = {
    //isPosting,
    isLogginIn: false,
    error: null
}


const isLoggedIn = (state=initialState, action) => {
    switch(action.type){
        case START_POSTING:
            return{
                ...state,
                isPosting: true,
                isLoggedIn: false,
                error: null
            }
        default:
            return state;
    }
}

export default isLoggedIn