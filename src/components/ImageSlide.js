import React, { Component } from 'react'

export default class imgslide extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="image-slider">
                    {/* Slideshow 1 */}
                    <ul className="rslides" id="slider1">
                        <li><img src="images/1.png" alt="z" /></li>
                        <li><img src="images/2.png" alt="z" /></li>
                        <li><img src="images/1.png" alt="z" /></li>
                    </ul>
                    {/* Slideshow 2 */}
                </div>
                {/*End-image-slider--*/}
            </div>
        )
    }
}
