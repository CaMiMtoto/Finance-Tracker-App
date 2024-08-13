"use client";

import React from 'react';
import Link from 'next/link';
import {FiDownload} from "react-icons/fi";
import {FaAndroid, FaAppStoreIos} from "react-icons/fa6";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <div
            className="relative bg-gradient-to-r from-gray-900 to-blue-700 text-white overflow-hidden py-10 min-h-[calc(100vh-56px)] ">
            <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-2/3 lg:pb-28 xl:pb-32">
                    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                        <span className="block">Manage Your Finances</span>
                        <span className="block text-blue-300">Effortlessly</span>
                    </h1>
                    <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                        Track your spending, set budgets, and gain insights online and on the go with our mobile app.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                        <div className="rounded-md shadow">
                            <Link
                                href="/register"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

            <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center">

               {/* <div className="mt-4 flex  space-x-4">
                    <Link
                        href="#"
                        className="flex items-center justify-center px-5 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                    >
                        <FaAndroid className="mr-2"/>
                        Get The App
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-center px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                        <FaAppStoreIos className="mr-2"/>
                        Get The App
                    </Link>
                </div>
*/}
            </div>
        </div>
    );
};

export default Hero;
