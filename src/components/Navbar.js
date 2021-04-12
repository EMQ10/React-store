import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../logo.jpg';
import '../styles/Navbar.css'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.expandMenu = this.expandMenu.bind(this)
    }

    expandMenu = () => {
        var x = document.getElementById("menu");
        x.style.display === "flex" ? x.style.display = "none" : x.style.display = "flex"
    }

    render() {
        return (           

            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 " >
                <NavLink to='/'>
                    <img src={logo} alt="logo"
                    className="navbar-brand"/>
                </NavLink>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ">
                        <NavLink to="/" className="nav-link">
                        Home
                        </NavLink >
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/login" className="nav-link">
                        Login
                        </NavLink >
                    </li>
                </ul>
                <span>
                    <input className='input' placeholder='Search'/>
                    <button className='btn-search'><i class="fa fa-search" aria-hidden="true"></i></button> 
               </span>
                <NavLink to="/cart" className="ml-auto">
                    <button className="btns">
                        <i className="fas fa-cart-plus"/>
                         
                    </button>
                </NavLink >
                
            </nav>
        )
    }
}
