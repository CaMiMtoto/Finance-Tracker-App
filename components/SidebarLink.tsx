// components/SidebarLink.tsx
import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

interface SidebarLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <li>
            <Link
                href={href}
                className={`flex gap-2 items-center py-2 px-4 rounded transition-colors ${
                    isActive ? 'bg-blue-800 text-white' : 'hover:bg-gray-700 text-gray-300'
                }`}
            >
                <span className="icon">
                    {icon}
                </span>
                <span className="text">
                    {label}
                </span>
            </Link>
        </li>
    );
};

export default SidebarLink;
