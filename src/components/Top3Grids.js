import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div className="top-3-grids">
                <div className="section group">
                    <div className="grid_1_of_3 images_1_of_3">
                        <a href="single.html"><img src="images/grid-img1.jpg" alt='z' /></a>
                        <h3>Lorem Ipsum is simply dummy text </h3>
                    </div>
                    <div className="grid_1_of_3 images_1_of_3 second">
                        <a href="single.html"><img src="images/grid-img2.jpg" alt='z' /></a>
                        <h3>Lorem Ipsum is simply dummy text </h3>
                    </div>
                    <div className="grid_1_of_3 images_1_of_3 theree">
                        <a href="single.html"><img src="images/grid-img3.jpg" alt='z' /></a>
                        <h3>Lorem Ipsum is simply dummy text </h3>
                    </div>
                </div>
            </div>
        )
    }
}
