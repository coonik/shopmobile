import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        // console.log(this.props);
        let { id, name, price, image, saothisaokosaothisao } = this.props.product;
        
        // console.log(id, name, price, image, category);
        
        return (
            <div className="grid_1_of_4 images_1_of_4 products-info">
                <img src={image} alt='z' />
                <a href="single.html">{name}</a>
                <h3>{price}</h3>
                <ul>
                    <li><a className="cart" href="single.html" onClick={(e)=>{this.props.addToCart(+id); this.props.hiddenCart(false);e.preventDefault();}}> </a></li>
                    {
                        saothisaokosaothisao ? <li><a className="i anh" href="single.html" onClick={(e)=>{this.props.saothisaokosaothico(id); e.preventDefault()} }> </a></li> : <li><a className="i" href="single.html" onClick={(e)=>{this.props.saothisaokosaothico(id); e.preventDefault()} }> </a></li>
                    }
                    <li><a className="Compar" href="single.html"> </a></li>
                    <li><a className="Wishlist" href="single.html" onClick={(e) =>{ this.props.removeProduct(id); e.preventDefault();}}> </a></li>
                </ul>
            </div>
        )
    }
}
