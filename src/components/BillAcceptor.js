import * as React from "react";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setBalanceText} from "../redux/BillAcceptor/actions";
import BillAcceptorForm from "./BillAcceptorForm";

class BillAcceptor extends Component {

    onSubmit = (values) => {
        this.props.setBalanceText(values.balance)
    }

    render() {
        return (
            <BillAcceptorForm onSubmit={this.onSubmit}/>
        )
    }
}


const mapStateToProps = (props) => {
    return {
        balance: props.billAcceptor.balance
    }
}


export default compose(
    connect(mapStateToProps, {setBalanceText})
)(BillAcceptor)