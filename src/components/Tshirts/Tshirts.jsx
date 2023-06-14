import React from 'react';
import './Tshirts.css'

const Tshirts = ({tshirt, handleAddtoCart}) => {
    const {picture, name, price} = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirts;