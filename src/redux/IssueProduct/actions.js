export const SET_CHANGE_PRODUCT_ID = 'SET_CHANGE_PRODUCT_ID'

export const setProductId = (productId) => {
    return {type: SET_CHANGE_PRODUCT_ID, payload: productId}
}