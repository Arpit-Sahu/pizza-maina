import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from 'react';
import {getCart, storeCart} from './helpers'

const App = () => {

    const [ cart, setCart ] = useState({});
    // Fetch cart from local storage
    useEffect(() => {
    getCart().then(cart => {
        setCart(JSON.parse(cart));
    });
    }, []);

    useEffect(() => {
        storeCart(JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="px-10">
            <Router>
                <CartContext.Provider value={{cart, setCart}}>
                <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" component={ProductsPage} exact></Route>
                        <Route path="/products/:_id" exact component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart} exact></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </div>
    )
}

export default App;