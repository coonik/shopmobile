import React, { Component } from 'react'

export default class componentName extends Component {
    showTotalAmount = (cart)=>{
        let s = 0;
        for (let index in cart){
            s+= cart[index].price * cart[index].quantity;
        } 
        return s;
    };
    render() {
        let {cart} = this.props;
        return (
            <div className="tongThanhTien">
                <p> Tổng thành tiền: {this.showTotalAmount(cart)}</p>
            </div>
        )
    }
}
