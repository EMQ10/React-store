import React, { Component } from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import '../styles/Product.css'
import PropTypes from "prop-types"
export default class Product extends Component {
    render() {

        const {id, title, image, price,rating, inCart} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >

                
                <div className= "card">
                    <ProductConsumer>
                    {(value) => (
                        <div className= "img-container p-1 " onClick={() => value.handleDetail (id)} >
                        
                        {/* for image */}
                        <Link to="/details">
                        <img src={image} alt="product" className="card-img"/>
                        </Link>

                        {/* for cart button */}
                        <button className="cart-btn " disabled = {inCart? true:false} 
                        onClick={()=>  {value.addToCart(id); value.openModal(id)}}>
                        {inCart ? (
                        <p className="mb-0" disabled> {" "} In Cart
                        </p>):
                        (<i className="fas fa-cart-plus"/>)}
                        </button>
                    </div>)}
         
                    </ProductConsumer>

                    {/* card text and content */}
                    <div>
                        <div className="card-text d-flex">
                           <h5 className=" mb-0 pb-1 font" >
                                <span className="mr-2">GHc</span>
                                {price}
                                <br/>
                            </h5>  
                            <p className=" mb-0 pb-1" >
                                 <span className="font-italic pb-3" id="rating">{rating} <i className="fas fa-star" id="fas"/></span>
                            </p>
                            
                        </div>
                       <p className="align-self-center mb-3 p-2 text-blue" >
                            {title.length > 30 ? title.substring(0, 40) + ' ...':title}
                            </p>
                    </div>
                    
                </div>
            </ProductWrapper>
        )
    }
}

Product.PropType = {
    product:PropTypes.shape({
        id:PropTypes.number,
        image:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.img-container{
    position:relative;
}


.cart-btn{
    position:absolute;
    top:0;
    left:0;
    padding:0.3rem 0.8rem;
    background-color:white;
    border:none;
    color:#008000;
    font-size:1.8rem;
    border-radius: 0 0 0.5rem 0;
    transform: translate(-100% ,-100%);
    transition: all 0.5s linear;

}
.card:hover .cart-btn{
    transform: translate(0%, 0%);
}

.cart-btn:hover{
    background: #008000;
    color:white;
    box-shadow: 0px 0px 20px black;


}
`