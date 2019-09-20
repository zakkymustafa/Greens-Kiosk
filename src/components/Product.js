import React from 'react';

class Product extends React.Component{

    render(){
        return (
            
<div className="card" style={{width: '18rem', marginRight: '10px'}}>
  <img src={this.props.item.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.item.name}</h5>
    <p className="card-text">Kshs {this.props.item.price}</p>
    <button onClick={() => this.props.addToCart(this.props.item)} className="btn btn-success">Add to cart</button>
  </div>
</div>
        )
    }

}

export default Product;