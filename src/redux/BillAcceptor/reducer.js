import {SET_CHANGE_TEXT_BALANCE} from "./actions";

const initialState = {
    balance: ''
};

export const billAcceptorReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CHANGE_TEXT_BALANCE:
            return {
                ...state,
                balance: action.payload
            }
        default:
            return state
    }
}