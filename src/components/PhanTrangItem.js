import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        let {pageCurrent} = this.props;
        return (
                <button onClick={(e)=>{this.props.getPage(pageCurrent);return e.preventDefault;}}>{this.props.pageName}</button>
        )
    }
}
