import React from "react";
import {connect} from "react-redux";
import {Products} from "./Products";


const ProductsContainer = (props) => {
    return <div>
        <Products balance={props.balance}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        balance: state.billAcceptor.balance
    }
}

export default connect(mapStateToProps,null)(ProductsContainer)