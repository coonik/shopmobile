import React, { Component } from 'react'

export default class TopNav extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="wrap">
                    {/*--start-logo--*/}
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" title="logo" alt='z' /></a>
                    </div>
                    {/*--end-logo--*/}
                    {/*--start-top-nav--*/}
                    <div className="top-nav">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="store.html">Store</a></li>
                            <li><a href="store.html">Featured</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="clear"> </div>
                </div>
            </div>
        )
    }
}
