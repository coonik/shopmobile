import React from 'react';

function App() {
  return (
    <div>
    <div className="wrap">
      {/*--start-Header--*/}
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
    <div className="clear"> </div>
    <div className="top-header">
      <div className="wrap">
        {/*--start-logo--*/}
        <div className="logo">
          <a href="index.html"><img src="images/logo.png" title="logo" alt='z'/></a>
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
    {/*--End-top-nav--*/}
    {/*--End-Header--*/}
    {/*start-image-slider--*/}
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
    <div className="clear"> </div>
    <div className="wrap">
      <div className="content">
        <div className="top-3-grids">
          <div className="section group">
            <div className="grid_1_of_3 images_1_of_3">
              <a href="single.html"><img src="images/grid-img1.jpg" alt='z'/></a>
              <h3>Lorem Ipsum is simply dummy text </h3>
            </div>
            <div className="grid_1_of_3 images_1_of_3 second">
              <a href="single.html"><img src="images/grid-img2.jpg" alt='z'/></a>
              <h3>Lorem Ipsum is simply dummy text </h3>
            </div>
            <div className="grid_1_of_3 images_1_of_3 theree">
              <a href="single.html"><img src="images/grid-img3.jpg" alt='z'/></a>
              <h3>Lorem Ipsum is simply dummy text </h3>
            </div>
          </div>
        </div>
        <div className="content-grids">
          <h4>Deals of the day</h4>
          <div className="section group">
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m1.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$260</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m2.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$150</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m7.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$130</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m4.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$460</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
          </div>
          <div className="section group">
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m2.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$260</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m6.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$100</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m7.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$180</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
            <div className="grid_1_of_4 images_1_of_4 products-info">
              <img src="images/m1.jpg" alt='z'/>
              <a href="single.html">Duis aute irure dolor in reprehenderit sed do eiusmod tempor incididunt</a>
              <h3>$140</h3>
              <ul>
                <li><a className="cart" href="single.html"> </a></li>
                <li><a className="i" href="single.html"> </a></li>
                <li><a className="Compar" href="single.html"> </a></li>
                <li><a className="Wishlist" href="single.html"> </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-sidebar">
          <h4>Categories</h4>
          <ul>
            <li><a href="/">Accord Mobiles</a></li>
            <li><a href="/">Ace Mobile</a></li>
            <li><a href="/">Acer Mobile</a></li>
            <li><a href="/">Airfone</a></li>
            <li><a href="/">Apple</a></li>
            <li><a href="/">Blackberry</a></li>
            <li><a href="/">Byond Tech</a></li>
            <li><a href="/">Celkon Mobiles</a></li>
            <li><a href="/">Dell Mobile Phones </a></li>
            <li><a href="/">Fly Mobile</a></li>
            <li><a href="/">Fujezone Mobiles </a></li>
            <li><a href="/">HTC</a></li>
            <li><a href="/">LG Mobiles</a></li>
            <li><a href="/">Longtel Mobile</a></li>
            <li><a href="/">Maxx</a></li>
            <li><a href="/">Micromax Mobiles </a></li>
            <li><a href="/">Samsung Mobiles</a></li>
            <li><a href="/">Sony Ericsson Mobiles</a></li>
            <li><a href="/">Wynncom Mobiles</a></li>
          </ul>
        </div>
      </div>
      <div className="clear"> </div>
    </div>
    <div className="footer">
      <div className="wrap">
        <div className="section group">
          <div className="col_1_of_4 span_1_of_4">
            <h3>Our Info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="col_1_of_4 span_1_of_4">
            <h3>Latest-News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="col_1_of_4 span_1_of_4">
            <h3>Store Location</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>Order-online</h3>
            <p>080-1234-56789</p>
            <p>080-1234-56780</p>
          </div>
          <div className="col_1_of_4 span_1_of_4 footer-lastgrid">
            <h3>News-Letter</h3>
            <form>
              <input type="text" /><input type="submit" defaultValue="go" />
            </form>
            <h3>Follow Us:</h3>
            <ul>
              <li><a href="/"><img src="images/twitter.png" title="twitter" alt='z'/>Twitter</a></li>
              <li><a href="/"><img src="images/facebook.png" title="Facebook" alt='z'/>Facebook</a></li>
              <li><a href="/"><img src="images/rss.png" title="Rss" alt='z'/>Rss</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="clear"> </div>
      <div className="wrap">
        <div className="copy-right">
          <p>© 2013 Mobile Store. All Rights Reserved | Design by  <a href="http://w3layouts.com/">W3Layouts</a></p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;
