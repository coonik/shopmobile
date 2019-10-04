import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let {category} = this.props;
        return (
            <div className="content-sidebar">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="/" onClick={(e)=>{this.props.getPage(1) ;this.props.filterProduct(-1); e.preventDefault()}}>All</a></li>
                            {
                                category.map((value, index)=> <li key={index}><a href="/" onClick={(e)=>{this.props.getPage(1) ;this.props.filterProduct(value.id); e.preventDefault()}}>{value.name}</a></li>)
                            }                            
                        </ul>
                    </div>
        )
    }
}
