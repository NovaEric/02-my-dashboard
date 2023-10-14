import React from 'react'
import Image from 'next/image'
import { BsDice6, BsUiChecksGrid, BsCodeSlash } from "react-icons/bs";
import { SidebarMenuItem } from '.';
import { SidebarMenuItemProps } from './SidebarMenuItem';


const menuItems: SidebarMenuItemProps[] = [
    {
        title: 'Dashboard',
        icon: <BsUiChecksGrid size={40} />,
        subtitle: 'Data Overview',
        path: '/dashboard/main'
    },
    {
        title: 'Counter',
        icon: <BsDice6 size={40} />,
        subtitle: 'Client Side Component',
        path: '/dashboard/counter'
    }
];

export const Sidebar = () => {
    return (
        <div id="menu" style={{width: '400px'}} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <BsCodeSlash className='mr-2' />
                    Nova
                    <span className="text-blue-500">Mettle</span>.
                </h1>
                <p className="text-slate-500 text-sm">Start today with what you have now. Make it happens!</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                        className="rounded-full w-8 h-8" 
                        width={50}
                        height={50}
                        src="https://media.licdn.com/dms/image/C4E03AQGVJF0oKndnVw/profile-displayphoto-shrink_800_800/0/1649005760682?e=2147483647&v=beta&t=W5RNmMhhuTYxJhXaLWU_RU0JfqiMsIJ3YJ8KHahL6Dg" 
                        alt="ProfilePic" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Eric Nova
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                
                {
                    menuItems.map( item => (
                        <SidebarMenuItem key={ item.path } { ...item } />
                    ))
                }
                
                {/* <SidebarMenuItem path={''} icon={<></>} title={''} subtitle={''} /> */}

                {/* <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
                    <BsUiChecksGrid/>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-5 text-white">Dashboard</span>
                        <span className="text-sm text-white/50 hidden md:block">Data Overview</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <BsDice6/>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Counter</span>
                        <span className="text-sm text-slate-500 hidden md:block">Local State</span>
                    </div>
                </a> */}
                {/* <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Cloud Storage</span>
                        <span className="text-sm text-slate-500 hidden md:block">Manage Cloud Storage</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Reports</span>
                        <span className="text-sm text-slate-500 hidden md:block">Manage Reports</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Security</span>
                        <span className="text-sm text-slate-500 hidden md:block">Generate Security Keys</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Extensions</span>
                        <span className="text-sm text-slate-500 hidden md:block">Manage Extensions</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Settings</span>
                        <span className="text-sm text-slate-500 hidden md:block">Edit App Settings</span>
                    </div>
                </a> */}

            </div>
        </div>
    )
}
