import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";

const App = () => {
    return (
        <div className="px-10">
            <Router>
                <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" component={Products} exact></Route>
                    </Switch>
            </Router>
        </div>
    )
}

export default App;