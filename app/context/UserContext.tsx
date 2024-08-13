"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import {getUserData} from "@/services/authService";

// Define the shape of your user data
interface User {
    id: string;
    name: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

// Create a context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Fetch user data from an API or local storage
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserData();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user data', error);
            }
        };

        fetchUser().then(r => r);
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
