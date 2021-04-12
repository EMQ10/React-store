import React from 'react'

export default function CartItem({item,value}) {
    const{id,title,image,price,total,count} = item;
    const{increment,decrement,removeItem} = value;
    
    return (
        <div className="row my-3 text-capitalize text-center bg-blue">
            {/* product image */}
            <div className="col-10 mx-auto col-lg-2"  >
                <img src={image} style={{width:'6rem',height:'5rem'}}
                className="img-fluid" alt='product'/>
            </div>
            {/* product title */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> product : </span>
                {title}
            </div>
            {/* price */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price : </span>
                {price}
            </div>
            {/* quantity of product */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className=" d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=> decrement(id)} >-</span>
                        <span className="btn btn-black mx-1" >{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=> increment(id)} >+</span>

                    </div>
                </div>
            </div>
            {/* remove */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}><i className="fas fa-trash"/></div>
            </div>
            {/* total */}
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total : GHc {total} </strong>
            </div>
        </div>
    );
}
