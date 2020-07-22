import React from "react";

export const Products = (props) => {

    const stateProduct = [
        {
            id: 1,
            name: 'Cola',
            description: 'Cold drink',
            price: 130
        },
        {
            id: 2,
            name: 'Evian',
            description: 'Water',
            price: 90
        },
        {
            id: 2,
            name: 'Snickers',
            description: 'Choco bar',
            price: 105
        }
    ]

    let products = stateProduct.map(e => {
        return <div>
            <div style={e.price <= props.balance ? {color: 'red'} : {color: 'black'}}>{e.id}</div>
            <div>{e.name}</div>
            <div>{e.description}</div>
            <div>{e.price}</div>
        </div>
    })


    return <div>
        {products}
    </div>
}