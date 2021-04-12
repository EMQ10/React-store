import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import '../styles/Details.css'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer >
                {value => {
                    const {id, title, metatitle, description,image, price,rating,inCart} =
                    value.detailProduct;
                    return(
                    <div >
                        <div className="container py-5"  >
                            
                            {/* product description */}
                            <div className="row" >
                                
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={image} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                                    {/* title */}<br/>
                                    <h1 className="text-slanted my-4 text-blue">{title}</h1>
                                    {/* metatitle */}
                                   <h6 className="text-muted">  {metatitle}</h6>
                                    {/* rating */}
                                   <p id="rating">Product Rating : ...{rating} <i className="fas fa-star" id="fas"/></p>
                                    {/* price */}
                                    <h4>
                                        <strong>
                                            Price : GHc {price}
                                        </strong>
                                    </h4>
                                </div>
                                     
                            </div>
                            {/* description */}
                            <h3 className= "text-capitalize font-weight-bold mt-3 mb-0 text-blue">
                                       <strong> Product Description </strong> 
                                </h3><br/>
                                 <div className="text-muted">{description}</div>   
                            {/* links to different pages */}
                            <div className="p-3 text-center">
                                <Link to="/">
                                 <button className="button mr-5"><i class="fas fa-home"></i></button>
                                </Link>
                                
                                 <button className="add" disabled = {inCart ? true : false}
                                 onClick ={() => {
                                     value.addToCart(id);
                                     value.openModal(id);
                                     
                                 }}>
                                     { inCart ? "inCart" : <i class="fas fa-cart-arrow-down"/>}
                                 </button>
                     
                            </div>
                        </div>
                    </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
