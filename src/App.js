import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Store from './components/Store';
import Modal from './components/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route path='/details' component={Details}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/store' component={Store}/>
      <Route component={Default}/>
    </Switch>
    <Modal/>
   </React.Fragment>
  );
}

export default App;
