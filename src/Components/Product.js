import {Link} from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Product = (props) => {

    const[isAdding, setIsAdding] = useState(false);
    const {cart, setCart} = useContext(CartContext); 

    const addToCart = (event, product) => {
        setIsAdding(true);
        event.preventDefault();
        console.log(product);

        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {};
        }
        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }

        if(!_cart.items[product._id]){
            _cart.items[product._id] = 1;
        }
        else {
            _cart.items[product._id] += 1;
        }
        _cart.totalItems += 1;
        setCart(_cart);

        // const cart = {
        //     items: {
        //         '4334gtb43i3o2p2k53' : 2,
        //         'verg343gj78ik79k67' : 3,
        //     },
        //     totalItems: 5,
        // };
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    }

    return (
        <Link to={"/products/" + props._id}>
            <div>
                <img src={props.img} alt="pizza-peparoni" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{props.title}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>
                        ₹ {props.price}
                    </span>
                    <button disabled={isAdding} onClick={(e)=>addToCart(e,props)} className= { (isAdding?"bg-green-500":"bg-yellow-500")+ " py-1 px-4 rounded-full font-bold"}>Add{isAdding?'ed':''}</button>

                </div>
            </div>
        </Link>
    )
}

export default Product
