import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="header">

                    <div className="search-bar">
                        <form>
                            <input type="text" /><input type="submit" defaultValue="Search" />
                        </form>
                    </div>
                    <div className="clear"> </div>
                    <div className="header-top-nav">
                        <ul>
                            <li><a href="/">Register</a></li>
                            <li><a href="/">Login</a></li>
                            <li><a href="/">Delivery</a></li>
                            <li><a href="/">Checkout</a></li>
                            <li><a href="/">My account</a></li>
                            <li><a href="/"><span>shopping cart&nbsp;&nbsp;: </span></a><label> &nbsp;noitems</label></li>
                        </ul>
                    </div>
                    <div className="clear"> </div>
                </div>
            </div>
        )
    }
}
