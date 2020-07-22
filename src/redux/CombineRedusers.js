import {combineReducers} from "redux";
import {billAcceptorReducer} from "./BillAcceptor/reducer";
import {issueProductReducer} from "./IssueProduct/reducer";
import {reducer as formReducer} from "redux-form";


export default combineReducers({
    billAcceptor : billAcceptorReducer,
    issueProduct: issueProductReducer,
    form: formReducer
})