import React from 'react';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <h4>Your Cart</h4>

            <ul className="list-group">
                {
                    this.props.items.map(product => {
                        return (
                        <li className="list-group-item">{product.name} Kshs {product.price}
                        <button className='btn btn-link' onClick={() => this.props.removeFromCart(product)}></button>
                        </li>
                        )
                    })
                }
                 
            </ul>
</div>
        )
    }

}

export default Cart;