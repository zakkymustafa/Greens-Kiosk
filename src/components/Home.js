import React from 'react';
import Products from './Products';
import Cart from './Cart';

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products : [],
            cart:[]
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    componentDidMount(){
        fetch ('http://greens-kiosk-api.antonyorenge.com/products')
        .then(response => response.json())
        .then(response =>{
                 this.setState({
                     products : response
                 })

        })
    }

    addToCart (product){
        if (this.state.cart.indexOf(product) < 0){
            this.setState(state =>({
                cart : state.cart.concat(product)
            }));
        }
    }


    removeFromCart(product){
        const index =this.state.cart.indexOf(product)
        if (index>=0){
            const cart = this.state.cart;
            cart.splice(index,1);
            this.setState({cart : cart});
        }

    }
    render(){

        return(
            <div className='row' style={{
                marginTop: '10px'
            }}>
     <div className='col-8'>
        <Products items={this.state.products} addToCart={this.addToCart}/>
    </div>
    <div className='col-4'>
        <Cart items ={this.state.cart} removeFromCart={this.removeFromCart}/>
    </div>
    </div>
        )
    }

}

export default Home;