import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from '../Tshirts/Tshirts';
import './Home.css';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {

    const [cart, setCart] = useState([]);

    const handleAddtoCart = tshirt => {

        const exists = cart.find(ts => ts._id === tshirt._id)

        if (exists) {
            toast('You have already added this t-shirt!')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
        const remaingCart = cart.filter(ts => ts._id !== id);
        setCart(remaingCart);
    }



    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirts>

                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>

            </div>
        </div>
    );
};

export default Home;