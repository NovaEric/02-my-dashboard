import { WidgetsGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'SEO dashboard title'
}

export default function MainPage() {
  return (
    <div className='flex flex-col p-2'>
            <div className='flex flex-row items-center justify-center'>
            <span className="text-5xl font-bold text-blue-600 underline my-10">Dashboard</span>
            <strong className='text-4xl no-underline ms-5'>| General Information </strong>
            </div>
  
      <WidgetsGrid/>
    </div>
  );
}