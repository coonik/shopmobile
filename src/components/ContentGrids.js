import React, { Component } from 'react'
import Items from './Items';

export default class componentName extends Component {

    showProducts = (products, page) => {
        var result = [];
        var tam = [];
        let i = 1;

        for (let index in products) {
            // tam = [...tam, <Items key={index} product={products[index]}/>]
            tam.push(<Items key={index} product={products[index]} removeProduct = {this.props.removeProduct} saothisaokosaothico={this.props.saothisaokosaothico} addToCart={this.props.addToCart} hiddenCart={this.props.hiddenCart} page={page}/>);
            if ((+index + 1) % 4 === 0) {
                result.push(<div key={i++} className='section-group'>{tam}</div>);
                tam = [];
            }
        }
        return tam.length ? [...result, <div key={i++} className='section-group'>{tam}</div>] : result;
        // for (let index in products){

        // }
    }

    render() {
        let { products,page } = this.props;
        return (
            <div className="content-grids">
                <h4>Deals of the day</h4>
                {this.showProducts(products, page)}
            </div>
        )
    }
}
