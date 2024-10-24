import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../../Redux/CartSlice'
import { MdDeleteForever } from "react-icons/md";
function CartItem({ id, image, title, description, price, quantity }) {
    const dispatch = useDispatch()
    return (
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={image} alt="product-image" class="w-full rounded-lg sm:w-40" />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                    <h2 class="text-2xl uppercase font-bold text-gray-900">{title}</h2>
                    <p class="mt-1 text-md text-gray-700">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos, molestiae sequi enim quae, deserunt facilis sunt id cum recusandae error esse possimus. Enim delectus consequatur recusandae maxime, hic sed.</p>
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 bg-red-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-blue-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-yellow-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-green-400 cursor-pointer border-2 border-gray-300'></span>
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>S</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>M</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>L</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>XL</span>
                    </div>
                </div>
                <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span onClick={() => dispatch(decrementQuantity(id))} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} min="1" />
                        <span onClick={() => dispatch(incrementQuantity(id))} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-lg text-red-700 font-bold">${price}</p>
                        <svg onClick={() => dispatch(removeItem(id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                           < MdDeleteForever size={25}/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem