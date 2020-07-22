export const SET_CHANGE_TEXT_BALANCE = 'SET_CHANGE_TEXT_BALANCE'

export const setBalanceText = (balance) => {

    return {type: SET_CHANGE_TEXT_BALANCE, payload: balance}
}