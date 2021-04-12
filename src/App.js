import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Login from './components/Login';
import Default from './components/Default';
import Modal from './components/Modal'
import { Footer } from './components/footer';



class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar/>

        <div className="all">

        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={Default}></Route>
        </Switch>

        <Modal/>
        <Footer/>
        </div>
        
      </React.Fragment>
    );
  }
  
}

export default App;
