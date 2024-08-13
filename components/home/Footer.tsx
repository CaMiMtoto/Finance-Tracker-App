"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Personal Finance Tracker. All rights
                    reserved.</p>
                <div className="mt-4">
                    <Link href="/terms" className="mx-2 text-sm hover:underline">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="mx-2 text-sm hover:underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
