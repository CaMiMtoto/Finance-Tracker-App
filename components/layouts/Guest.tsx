import Link from "next/link";
import React from "react";

const Guest: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>
            <nav className=" bg-gray-900 text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <h1>
                        Personal Finance Tracker
                    </h1>
                    <ul className="flex gap-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>{children}</div>
        </>


    );
}

export default Guest;