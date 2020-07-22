import {Field, reduxForm} from "redux-form";
import * as React from "react";

let BillAcceptorForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'balance'} component={'input'} placeholder={'> ...'}/>
        </form>
    )
}

BillAcceptorForm = reduxForm({form: 'billAcceptorForm'})(BillAcceptorForm)



export default BillAcceptorForm;