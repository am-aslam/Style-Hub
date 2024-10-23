import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../../Redux/CartSlice'

function CartItem({ id, image, title, description, price, quantity }) {
    const dispatch = useDispatch()
    return (
        <div className='border-2 border-gray-200 p-8 rounded-lg flex flex-col w-full shadow-md'>
            <div className='w-full '>
                <img src={image} alt={title} className="rounded-lg w-full" />
            </div>

            <div className='w-full flex flex-col justify-between'>
                <div className='flex justify-between items-start mb-4'>
                    <h2 className="text-2xl md:text-4xl font-semibold uppercase">{title}</h2>
                    <h4 className="text-lg md:text-xl font-semibold text-red-400">${price}</h4>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{description}</p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,

                </p>
                <div className='cartItem__incrDec'>
                    <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                </div>

                {/* Add to Cart Button */}
                <div className='flex flex-col md:flex-row  items-center'>
                    <button
                        onClick={() => dispatch(removeItem(id))}
                        className="w-full md:w-48 bg-yellow-300 text-white py-2 rounded-sm hover:bg-yellow-400 transition duration-300">
                        Remove From Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem