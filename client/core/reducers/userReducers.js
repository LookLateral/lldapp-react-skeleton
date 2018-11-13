import {ADD_USER, EDIT_USER, BLOCK_USER, SIGN_IN} from './../constants/actionConstants'

export default function userReducers (state = [], action) {
    switch (action.type){
        case ADD_USER :
            return [...state, Object.assign({}, action.user)]
        case EDIT_USER :
            const hasUser = state.some (user => user.ID === action.user.ID)   
            if (hasUser) { 
                const newState = object.assign({}, state)
                newState.user = action.user
                return newState 
             } else return state
             
        case BLOCK_USER :
            return [state.filter((user, i) => i === user.ID)] // It's a delete right now
 
        case SIGN_IN :
            return []    

    
        default :
            return state
     
    }    
}