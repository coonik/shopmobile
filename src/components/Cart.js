import React, { Component } from 'react'
import ItemsCart from './ItemsCart'
import CartTotalAmount from './CartTotalAmount'

export default class componentName extends Component {
    showItems = (cart) => {
        if (cart){
            let tam=[];
            for (let index in cart) {
                tam.push(<ItemsCart key={cart[index].id} index={index} item={cart[index]} removeCart={this.props.removeCart} editCart={this.props.editCart}/>)
            }
            return tam;
        }            
        else
            return '';
    }
    render() {
        let { cart } = this.props;
        return (
            <div className="divGioHang">
                <div className="closeGioHangIcon" onClick={(e)=>{this.props.hiddenCart(true);return e.preventDefault;}}>
                    <i className="far fa-window-close fa-3x"></i>
                </div>
                <div>
                    <div>
                    </div><table className="gioHang" id="gioHangMain">
                        <tbody><tr className="title-gioHang">
                            <th className="col-gioHang">Tên điện thoại</th>
                            <th className="col-gioHang">Ảnh</th>
                            <th className="col-gioHang">Giá</th>
                            <th className="col-gioHang">Số lượng mua</th>
                            <th className="col-gioHang">Chỉnh sửa</th>
                            <th className="col-gioHang">Thành tiền</th>
                        </tr>
                            {this.showItems(cart)}
                        </tbody></table>
                </div>
                <CartTotalAmount cart={cart}/>
            </div>

        )
    }
}
