import React, {useEffect, useState} from 'react';
import {FaBars,} from 'react-icons/fa';
import {
    TbBuildingBank,
    TbChevronLeft,
    TbChevronRight,
    TbHelp,
    TbReceipt,
    TbSettings,
    TbSmartHome,
    TbUser
} from "react-icons/tb";
import SidebarLink from "@/components/SidebarLink";
import {useUser} from "@/app/context/UserContext";

const Authenticated: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    useEffect(() => {
        // listen when browser window is resized
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
    }, []);
    const {user} = useUser();
    if (!user) {
        return <div>Loading...</div>;
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside
                className={` min-h-screen bg-gray-900 text-white p-4 transition-transform transform flex flex-col justify-between ${
                    isSidebarOpen ? 'w-64' : 'w-0 hidden'
                } `}
            >
                <div>
                    <div className="flex  justify-center items-center">
                        <h2 className="text-lg text-center font-semibold">
                            PFT
                        </h2>
                    </div>

                    <ul className="mt-4 flex flex-col gap-3">
                        <SidebarLink href="/dashboard" icon={<TbSmartHome className="h-6 w-6"/>} label="Home"/>
                        <SidebarLink href="/transactions" icon={<TbReceipt className="h-6 w-6"/>} label="Transactions"/>
                        <SidebarLink href="/budgets" icon={<TbBuildingBank className="h-6 w-6"/>} label="Budgets"/>
                        <SidebarLink href="/account" icon={<TbUser className="h-6 w-6"/>} label="Account"/>
                        <SidebarLink href="/support" icon={<TbHelp className="h-6 w-6"/>} label="Support"/>
                        <SidebarLink href="/settings" icon={<TbSettings className="h-6 w-6"/>} label="Settings"/>
                    </ul>
                </div>
                <ul className="mt-4 flex flex-col gap-3">

                </ul>

            </aside>

            <div className={`flex-1 ${isSidebarOpen ? '' : 'ml-0'}  bg-gray-100 transition-all duration-300`}>
                <header className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 p-4">
                    <div className="flex gap-2 items-center">
                        <button onClick={toggleSidebar}
                                className="text-2xl flex items-center justify-center border bg-gray-300 text-gray-800 rounded-full p-2">
                            {
                                isSidebarOpen ? <TbChevronLeft/> : <TbChevronRight/>
                            }
                        </button>
                        <div>
                            <h6 className="text-lg font-bold">
                                Personal Finance Tracker
                            </h6>
                            <p className="text-xs">
                                Welcome back,<strong>{user.name}</strong>
                            </p>
                        </div>
                    </div>

                    <form className="">
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none outline-none focus:border-0">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded "
                                   placeholder="Search..." required/>
                        </div>
                    </form>

                </header>

                <main className="my-3">{children}</main>
            </div>
        </div>
    );
};

export default Authenticated;
