import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return { totalPrice, totalQuantity }
    }

    return (
        <div className="py-28 flex justify-center flex-col gap-10 items-center px-44">
            <div className='grid grid-cols-3 gap-5'>
            {cart.map((item, index) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                        title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
            ))}
            </div>

            <p className="py-10 border p-5">
                total ({getTotal().totalQuantity} items)
                : <strong>${getTotal().totalPrice}</strong>
            </p>

        </div>
    );
};

export default Cart;
