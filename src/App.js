import React, { Component } from 'react';
// đã import css đâu ... cÓ dell gì mà phải import ?
// vãi -_-  @@ răng hè ? chứ cái nớ là nó dùng css của cái mình copy mà ?
import './App.css';
import Cart from './components/Cart';
import Clear from './components/Clear';
import ContentGrids from './components/ContentGrids';
import ContentSidebar from './components/ContentSidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageSlide from './components/ImageSlide';
import Top3Grids from './components/Top3Grids';
import TopNav from './components/TopNav';
import PhanTrang from './components/PhanTrang';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 11',
                    image: '/images/m1.jpg',
                    price: '22000000',
                    category: 1,
                    saothisaokosaothisao: false
                },
                {
                    id: 2,
                    name: 'Oppo F1S',
                    image: '/images/m2.jpg',
                    price: '17000000',
                    category: 2,
                    saothisaokosaothisao: false
                },
                {
                    id: 3,
                    name: 'Samsung GLX S6',
                    image: '/images/m4.jpg',
                    price: '15000000',
                    category: 3,
                    saothisaokosaothisao: false
                }, {
                    id: 4,
                    name: 'Iphone 12',
                    image: '/images/p1.png',
                    price: '22000000',
                    category: 1,
                    saothisaokosaothisao: false
                },
                {
                    id: 5,
                    name: 'Oppo F2S',
                    image: '/images/p2.jpg',
                    price: '17000000',
                    category: 2,
                    saothisaokosaothisao: false
                },
                {
                    id: 6,
                    name: 'Samsung GLX S7',
                    image: '/images/p3.jpg',
                    price: '15000000',
                    category: 3,
                    saothisaokosaothisao: false
                }, {
                    id: 7,
                    name: 'Iphone 13',
                    image: '/images/p4.jpg',
                    price: '22000000',
                    category: 1,
                    saothisaokosaothisao: false
                },
                {
                    id: 8,
                    name: 'Oppo F3S',
                    image: '/images/p5.jpg',
                    price: '17000000',
                    category: 2,
                    saothisaokosaothisao: false
                },
                {
                    id: 9,
                    name: 'Samsung GLX S7',
                    image: '/images/p6.jpg',
                    price: '15000000',
                    category: 3,
                    saothisaokosaothisao: false
                }
            ],
            category: [
                {
                    id: 1,
                    name: 'Apple'
                },
                {
                    id: 2,
                    name: 'Oppo'
                },
                {
                    id: 3,
                    name: 'Samsung'
                }
            ],
            currentCategory: -1,
            cart: [
                // {
                //     id: 1,
                //     name: 'Samsung GLX S7',
                //     image: '/images/p6.jpg',
                //     price: 15000000,
                //     quantity: 10,
                //     amount: this.price * this.quantity
                // }
            ],
            hiddenCart: true, 
            page: 1,
        }
    }

    //Tác động lên Product

    removeProduct = (id) => {
        let { products } = this.state;
        products = products.filter(value=>value.id!==id);
        this.setState({
            products: products
        });
    }

    saothisaokosaothico = (id) => {
        let { products } = this.state;
        products = products.map(value=>{if (value.id===id){if (value.saothisaokosaothisao) value.saothisaokosaothisao = false; else value.saothisaokosaothisao = true } ; return value;});
        this.setState({
            products: products
        });
    }

    filterProduct = (id) => {
        // let {products} = this.state;
        // if(!id){
        //     return products;
        // }
        this.setState(
            {
                currentCategory : +id
            }
        );
    }


    // Tác động lên giỏ hàng

    addToCart = (id) =>{
        let {cart, products} = this.state;
        let item =  cart.filter(value=> value.id === id);
        if (item.length!==0){
            cart = cart.map(value=>{
                if ( value.id === id )
                    value.quantity++;
                return value;
            });
        }            
        else{
            let tam = products.filter(value=>value.id === id);
            cart.push({
                id: tam[0].id,
                name: tam[0].name,
                image: tam[0].image,
                price: tam[0].price,
                quantity: 1
            });
        }
        this.setState({
            cart: cart
        })
    }

    editCart = (id, quantity)=>{
        let {cart} = this.state;
        cart = cart.map(value=>{
            if ( value.id === id )
                value.quantity=quantity;
            return value;
        });
        this.setState({
            cart: cart
        })
    }

    
    removeCart = (index)=>{
        let {cart} = this.state;
        cart.splice(index,1);
        this.setState({
            cart: cart
        })
    }

    hiddenCart = (isHidden)=>{
        this.setState({
            hiddenCart: isHidden
        })
    }

    // phân trang

    getPage = (p)=>{
        this.setState({
            page: p
        })
    }


    render() {
        let { products, category, currentCategory, cart, hiddenCart, page } = this.state;
        
        //products1 là products đã lọc theo loại 
        let products1 = currentCategory !== -1 ? products.filter(value => value.category === currentCategory) : products;
        let products1Leng = products1.length;
        //products1 là products đã lọc theo loại và phân trang
        let products2 = [];
        if (products1Leng>0){
            for (let i=(page-1)*8;i<(page)*8;i++){
                if (i===products1Leng)
                    break;
                else
                    products2.push(products1[i]);
            }
        }
        let tongSoTrang = parseInt(products1.length/8);

        // console.log(products2);
        if (hiddenCart){
            return (
                <div>
                    {/*--start-Header--*/}
                    <Header />
                    <Clear />
                    <TopNav />
                    {/*--End-top-nav--*/}
                    {/*--End-Header--*/}
                    {/*start-image-slider--*/}
                    <ImageSlide />
                    <div className="clear"> </div>
                    <div className="wrap">
                        <div className="content">
                            <Top3Grids />
                            <ContentGrids hiddenCart={this.hiddenCart} products={products2} removeProduct={this.removeProduct} saothisaokosaothico={this.saothisaokosaothico} addToCart={this.addToCart} page={page}/>
                            <ContentSidebar category={category} filterProduct={this.filterProduct} getPage={this.getPage}/>
                        </div>
                        <div className="clear"> </div>
                        </div>
                        <PhanTrang key={page} tongSoTrang={tongSoTrang} getPage={this.getPage} page={page}/>
                    <Footer />
                </div>
            );
        }
        else{
            return (
                <div>
                    {/*--start-Header--*/}
                    <Header />
                    <Clear />
                    <TopNav />
                    {/*--End-top-nav--*/}
                    {/*--End-Header--*/}
                    {/*start-image-slider--*/}
                    <ImageSlide />
                    <div className="clear"> </div>
                    <div className="wrap">
                        <div className="content">
                            <Top3Grids />
                            <ContentGrids hiddenCart={this.hiddenCart} products={products2} removeProduct={this.removeProduct} saothisaokosaothico={this.saothisaokosaothico} addToCart={this.addToCart}/>
                            <ContentSidebar category={category} filterProduct={this.filterProduct} getPage={this.getPage}/>
                        </div>
                        <div className="clear"> </div>
                        <PhanTrang key={page} tongSoTrang={tongSoTrang} page={page}/>
                        <Cart hiddenCart={this.hiddenCart} cart={cart} addToCart={this.addToCart} removeCart={this.removeCart} editCart={this.editCart}  removeProduct={this.removeProduct}/>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}

export default App;
