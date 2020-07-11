import React, { Component, createContext } from 'react'
import Product from './components/Product';

const ProductContext = createContext();

class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value='hello from context'>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};