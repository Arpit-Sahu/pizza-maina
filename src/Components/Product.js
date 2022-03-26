import {Link} from 'react-router-dom';

const Product = (props) => {
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
                    <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
                </div>
            </div>
        </Link>
    )
}

export default Product
