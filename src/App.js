import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./redux/CombineRedusers";
import BillAcceptor from "./components/BillAcceptor";
import ProductContainer from "./components/Products/ProductsContainer";

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BillAcceptor/>
                <ProductContainer/>
            </div>
        </Provider>
    );
}

export default App;
