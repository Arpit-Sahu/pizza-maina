import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import cart from "./Pages/cart";
import SingleProduct from "./Pages/SingleProduct";

const App = () => {
    return (
        <div className="px-10">
            <Router>
                <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" exact component={ProductsPage} exact></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                        <Route path="/cart" component={cart} exact></Route>
                    </Switch>
            </Router>
        </div>
    )
}

export default App;