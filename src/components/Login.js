import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default class Login extends Component {
    render() {
        return (
            <ProductWrapper>
            <div className="container">
            <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-uppercase " >
                    <div className="mb-3">
                        <h5>Login form</h5>    
                    </div>
                    
                    <input  placeholder='User Name'/>
                    <div>
                    <Link to="/">
                        <button className="cs" >
                           LOGIN
                        </button>
                    </Link></div>
                    <div>
                    <Link redirect to="/">
                        <button className="cs" >
                          CONTINUE AS GUEST
                        </button>
                    </Link></div>
                </div>
            </div>
           </div>
           </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:32px;


#modal{
    background: white;
    border-radius:60px;
    border: 3px solid #2a2a72;
    padding:40px;
    box-shadow: 0px 0px 20px black;
    
}
input{
    width:300px;
    height:40px;
    border: 2px solid #2a2a72;
    border-radius:5px;
}
input:focus{
    box-shadow: 0px 0px 10px black;
}
.cs{
    width:300px;
    border-style: solid;
    border: 2px solid #2a2a72;
    border-radius:5px;
    padding:5px;
    color:#2a2a72;
    background: white;
    margin-top:20px;
}
.cs:hover{
    box-shadow: 0px 0px 10px black;
    font-size:20px;
}

`
