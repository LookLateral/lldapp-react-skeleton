import {ADD_USER} from './../constants/actionConstants'

export default function userReducers (state = [], action) {
    switch (action.type){
        case ADD_USER :
            return [...state, Object.assign({}, action.user)]
        default :
            return state

    }
}