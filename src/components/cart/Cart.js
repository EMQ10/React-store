import React, { Component } from 'react';
import CartColums from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

function Title({name,title}) {
    return(
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title p-4">
                <h1 className=" font-weight-bold text-capitalize">
                  {name}  <strong className="text-blue">{title}</strong>  
                </h1>
            </div>
        </div>
    )
}
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="my" title="cart"/>
                                    <CartColums /> 
                                    <CartList value={value}/> 
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            );
                        }else{
                           return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
