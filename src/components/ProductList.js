import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context';

function Title({name,title}) {
    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className=" font-weight-bold text-capitalize">
                  {name}  <strong className="text-blue">{title}</strong>  
                </h1>
            </div>
        </div>
    )
}

export default class ProductList extends Component {    
    
    render() { 
        return (
          
         <React.Fragment>
             <div className="py-5">
                <div className="container">
                <Title name="all" title="products"/><hr/>
                    <div className="row">
                        <ProductConsumer>
                            {value=>{
                                return value.products.map( product =>{
                                    return <Product key={product.id} product={product} 
                                    />
                                })
                            }}
                        </ProductConsumer>

                    </div>
                </div>
             </div>
         </React.Fragment>       
          // <Product/>  
        )
    }
}
