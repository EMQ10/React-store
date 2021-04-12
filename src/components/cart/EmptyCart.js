import React from 'react'
import styled from "styled-components";

export default function EmptyCart() {
    return (
        <CartWrapper>
        <div className="container mt-10 p-5" >
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your cart is currently Empty</h1>
                </div>
            </div>
        </div>
        </CartWrapper>
    )
}
const CartWrapper = styled.div`

padding:70px;

`