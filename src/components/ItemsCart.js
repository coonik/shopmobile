import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let { id, name, image, price, quantity } = this.props.item;
        let {index} = this.props;
        console.log(index);
        return (
            <tr className="row-gioHang">
                <td className="col-gioHang">{name}</td>
                <td className="col-gioHang"><img src={image} alt="" /></td>
                <td className="col-gioHang">{price}</td>
                <td className="col-gioHang">{quantity}</td>
                <td className="col-gioHang">
                    <input type="number" id="txtSua" placeholder="Số lượng sửa"/>
                    <button className="btnSua" onClick={(e)=>{
                        let sl = +document.getElementById("txtSua").value; 
                        if (sl>0){
                            this.props.editCart(id,sl);
                        }else{
                            alert("Nhập số lượng sai!!");
                            document.getElementById("txtSua").value="";
                            document.getElementById("txtSua").focus();
                        }
                        return e.preventDefault;
                        }
                    }>Sửa</button>
                    <button className="btnXoa" onClick={(e)=>{this.props.removeCart(+index);return e.preventDefault}}>Xoá</button>
                </td>
                <td className="col-gioHang">{price * quantity}</td>
            </tr>
        )
    }
}
