import { INCREMENT,DECREMENT } from "../action/actionTypes";

const initial ={a:0}

function counterReducer(state=initial,action){
    switch(action.type){
        case INCREMENT:
            return {...state,a:state.a+action.value}
        case DECREMENT:
            return {...state,a:state.a-action.value}
        default:
            return state;
    }
}

export default counterReducer;