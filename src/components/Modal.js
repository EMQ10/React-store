import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) => {
                   const { modalOpen,closeModal} = value;
                   const {image, title, price} = value.modalProduct;
                   
                   if(!modalOpen){
                       return null;
                   }
                   else{
                       return (
                       <ModalContainer>
                           <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" >
                                    <div className="d-flex">
                                        <h5>item added to the cart</h5>
                                        <i class="fas fa-times pl-3" style={{color:'red'}} onClick={() => closeModal()}></i>
                                    </div>
                                    
                                    <img src={image} className="img-fluid mb-3 mt-2" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted" > Price : GHc {price}</h5>
                                    <Link to="/">
                                        <button className="cs" onClick={() => closeModal()}>
                                           Store
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="cs1" onClick={() => closeModal()}>
                                          view Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                           </div>
                       </ModalContainer>
                       );
                   }
               }}
           </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;


img{
    padding:0;
 height:250px;
}

#modal{
    background: white;
    border-radius:70px;

}
.cs{
    border-style: solid;
    border: 2px solid #2a2a72;
    border-radius:20px;
    padding:5px;
    color:#2a2a72;
    background: white;
}
.cs:hover{
    box-shadow: 0px 0px 10px black;
    font-size:20px;
}
.cs1:hover{
    box-shadow: 0px 0px 10px black;
    font-size:20px;

}
.cs1{
    border-style: solid;
    border: 2px solid #ffa400;
    border-radius:20px;
    padding:5px;
    color:#ffa400;
    background: white;
}
`