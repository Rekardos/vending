import {SET_CHANGE_PRODUCT_ID} from "./actions";


const initialState = {
    productId: null
};

export const issueProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANGE_PRODUCT_ID:
            return {
                ...state,
                productId: action.payload
            }
        default:
            return state
    }
}