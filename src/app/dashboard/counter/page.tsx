import { CartCounter } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Simple Counter'
}


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-5xl font-bold text-blue-600 underline mb-5">Cart Products</span>
      <CartCounter />
    </div>
  );
}