// services/authService.ts
import axiosInstance from '../lib/axios';
import {RegisterResponse, LoginResponse} from '@/types/api';

export const getUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await axiosInstance.get(`/auth/user/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};


export const registerUser = async (name: string, email: string, password: string): Promise<RegisterResponse> => {
    try {
        const response = await axiosInstance
            .post('/auth/register',
                {name, email, password}
            );
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post('/auth/login', {email, password});
        let data = response.data;
        if (data.token) {
            localStorage.setItem('token', data.token); // Store JWT token in localStorage
        }
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
