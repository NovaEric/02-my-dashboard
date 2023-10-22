'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne } from '@/store/counter/counterSlice';
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs';


export const CartCounter = () => {

    const count = useAppSelector( c => c.counter.count);
    const dispatch = useAppDispatch();
    
  return (
    <div className="flex">
        <button onClick={() => dispatch(substractOne())} className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-blue-600 transition-all w-[100px]">
          <BsFillCaretLeftSquareFill size={80}/>
        </button>
        <span className={`${ count < 5 ? 'text-red-600' : 'text-green-600'} text-9xl m-5`}>{count}</span>
        <button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-blue-600 transition-all w-[100px]">
          <BsFillCaretRightSquareFill size={80}/>
        </button>
      </div>
  )
}
