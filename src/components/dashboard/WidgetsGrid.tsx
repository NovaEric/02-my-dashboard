'use client';
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5"
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {

  const count = useAppSelector( c => c.counter.count);
  
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget 
        title={count}
        titleClassName={`${ count < 5 ? 'text-red-600' : 'text-green-600'} text-6xl m-5`}
        subtitle="Get the best coffee here "
        label="Counter"
        icon={<IoCafeOutline size={50} className='text-indigo-600' />}
        href="/dashboard/counter"
      />
    </div>
  );
};
