'use client';
import React, { useState } from 'react';
import { BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from 'react-icons/bs';

interface Props {
    value?: number;
}


export const CartCounter = ({ value = 0 }: Props) => {

    const [counter, setCounter] = useState<number>(value);
    
  return (
    <div className="flex">
        <button onClick={() => setCounter( counter - 1 )} className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-blue-600 transition-all w-[100px]">
          <BsFillCaretLeftSquareFill size={80}/>
        </button>
        <span className={`${ counter < 5 ? 'text-red-600' : 'text-green-600'} text-9xl m-5`}>{counter}</span>
        <button onClick={() => setCounter( counter + 1 )} className="flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-blue-600 transition-all w-[100px]">
          <BsFillCaretRightSquareFill size={80}/>
        </button>
      </div>
  )
}
