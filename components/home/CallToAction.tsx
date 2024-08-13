"use client";

import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
    return (
        <div className="bg-blue-600 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
            <Link href="/register" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition">
                    Sign Up Now
            </Link>
        </div>
    );
};

export default CallToAction;
