import React from 'react';
import Product from './Product'

class Products extends React.Component{

    render(){
        return(
            <div className='row'>
                {
                    this.props.items.map(product => {
                        return <Product item={product} addToCart={this.props.addToCart}/>
                    })
                }
            </div>
        )
    }

}

export default Products;