import {useContext, useEffect, useState} from 'react'
import {CartContext} from '../CartContext';

const Cart = () => {
    // const {name} = useContext(CartContext);
    /* <h1>{name}</h1> */

    const[priceFetched, togglePriceFetched] = useState(false);
    const[products, setProduct] = useState([]);

    const {cart, setCart} = useContext(CartContext);
    useEffect(() => {
        if(!cart.items) return;
        if(priceFetched) return;

        fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then(res => res.json())
        .then(products => {
            setProduct(products);
            togglePriceFetched(true);
        })

        

    }, [cart, priceFetched])

    const getQty = id => cart.items[id];
    const increment = id => {
        const existingQty = cart.items[id];
        const _cart = {...cart};
        _cart.items[id] = existingQty+1;
        _cart.totalItems += 1;
        setCart(_cart);
    }
    const decrement = id => {
        const existingQty = cart.items[id];
        if(existingQty === 1 ) return;
        const _cart = {...cart};
        _cart.items[id] = existingQty-1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }
    // const [total, setTotal] = useState(0);
    let total = 0;
    const getSum = (id, price) => {
        let qty = getQty(id);
        let sum = price + price*qty;
        total += sum;
        return sum;
    }

    const handleDelete = id => {
        const _cart = {...cart};
        const qty = _cart.items[id];
        delete _cart.items[id];
        _cart.totalItems -= qty;
        setCart(_cart);
        setProduct(products.filter(product => product._id!==id))
    }

    const handleOrderNow = () => {
        window.alert("Order placed succesfully!");
        setProduct([]);
        setCart([]);
    }

    return (

        products.length?

        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart items</h1>
            <ul>
                {
                    products.map((product) => {
                        return(
                        <li className='mb-12' key={product._id}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='h-16' src={product.image} alt=""></img>
                                    <span className='font-bold ml-4 w-48'>{product.name}</span>
                                </div>
                                <div>
                                    <button onClick={() => decrement(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                                    <b className='px-4'>{getQty(product._id)}</b>
                                    <button onClick={() => increment(product._id)} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                                </div>
                                <span>₹ {getSum(product._id, product.price)}</span>
                                <button onClick={()=>{handleDelete(product._id)}} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                            </div>
                        </li>
                        );
                    })
                }
            </ul>
            <hr className="my-6" />
            <div className='text-right'>
                <b>Grand Total:</b> ₹ {total}
            </div>
            <div className='text-right mt-6'>
                <button onClick={handleOrderNow} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order now</button>
            </div>
        </div>
        :
        <img src = '/images/empty-cart.png' className='mx-auto w-1/2 mt-6' alt=""></img>
    )
}

export default Cart
