"use client";

import React from 'react';
import {Line} from 'react-chartjs-2';
import Authenticated from '@/components/layouts/Authenticated';
import {TbCalendar, TbChartLine, TbFilter, TbFilters, TbTrendingDown, TbTrendingUp} from "react-icons/tb";
import {FaCalendarDay, FaChartLine, FaMoneyBillWave} from "react-icons/fa6";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

// Dummy data for charts
const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Income',
            data: [400, 450, 300, 500, 600, 700, 800],
            borderColor: '#4caf50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true, // Enable area chart
            borderWidth: 4,
            barThickness: 20,
            tension: 0.1,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false, // Hide legend
        },
        tooltip: {
            enabled: true, // Enable t
        },
    },
    scales: {
        x: {
            grid: {
                display: false, // Hide x-axis grid lines
            },
            ticks: {
                display: false, // Hide x-axis labels
            },
        },
        y: {
            grid: {
                display: false, // Hide y-axis grid lines
            },
            ticks: {
                display: false, // Hide y-axis labels
            },
        },
    },
    elements: {
        line: {
            tension: 0.4, // Smooth curves
            borderColor: 'rgba(33, 150, 243, 1)', // Line color
            borderWidth: 2, // Line width
        },
        point: {
            radius: 3, // Hide points
        },
    },
};


const expensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Expenses',
            data: [200, 250, 300, 350, 400, 450, 500],
            borderColor: '#f44336',
            backgroundColor: 'rgba(244, 67, 54, 0.2)',
            fill: true, // Enable area chart
        },
    ],
};

const budgetsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Budgets',
            data: [300, 350, 400, 450, 500, 550, 600],
            borderColor: '#2196f3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            fill: true, // Enable area chart
        },
    ],
};

// Dummy data for recent transactions
const recentTransactions = [
    {id: 1, date: '2024-08-01', description: 'Salary', amount: 2000},
    {id: 2, date: '2024-08-05', description: 'Groceries', amount: -150},
    {id: 3, date: '2024-08-10', description: 'Utilities', amount: -100},
    {id: 4, date: '2024-08-15', description: 'Freelance Work', amount: 300},
    {id: 5, date: '2024-08-20', description: 'Rent', amount: -800},
];

const DashboardPage: React.FC = () => {

    return (
        <Authenticated>
            <div className="px-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-xs text-gray-600">
                    Welcome to the dashboard. Here you can view your income, expenses, budgets, and recent transactions
                </p>

                <div className="flex flex-col lg:flex-row gap-2 justify-between my-3">

                    <div className="inline-flex rounded-md shadow-sm">
                        <a href="#" aria-current="page"
                           className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            12 Months
                        </a>
                        <a href="#"
                           className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            30 Days
                        </a>
                        <a href="#"
                           className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-l border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            7 Days
                        </a>
                        <a href="#"
                           className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            24 Hours
                        </a>
                    </div>
                    <div className="inline-flex  gap-2">
                        <a href="#" aria-current="page"
                           className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-2  ">
                            <TbCalendar className="w-5 h-5"/> Select Dates
                        </a>
                        <a href="#" aria-current="page"
                           className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-2  ">
                            <TbFilter className="w-5 h-5"/>
                            Filters
                        </a>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Income Card */}
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-semibold ">
                            Total Income
                        </h2>
                        <div className="flex justify-between items-center mt-4 ">
                            <h1 className="font-bold text-2xl ">
                                6,000,000 RWF
                            </h1>
                            <div className="text-green-600 flex gap-2 items-center text-xs font-semibold">
                                <TbTrendingUp/>
                                <span>12%</span>
                            </div>
                        </div>
                    </div>
                    {/* Expense Card */}
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-semibold ">
                            Total Expenses
                        </h2>
                        <div className="flex justify-between items-center mt-4 ">
                            <h1 className="font-bold text-2xl ">
                                900,000 RWF
                            </h1>
                            <div className="text-red-600 flex gap-2 items-center text-xs font-semibold">
                                <TbTrendingDown/>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>
                    {/* Budget Card */}
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-semibold ">
                            Total Budgets
                        </h2>
                        <div className="flex justify-between items-center mt-4 ">
                            <h1 className="font-bold text-2xl ">
                                1,000,000 RWF
                            </h1>
                            <div className="text-blue-600 flex gap-2 items-center text-xs font-semibold">
                                <TbTrendingUp/>
                                <span>5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
                    {/* Money Flow Chart */}
                    <div className="bg-white p-4 rounded-lg  mb-6 h-full">
                        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                            <FaChartLine className="text-yellow-500"/>
                            Money Flow
                        </h2>
                        {/* Placeholder for Money Flow Chart */}
                        <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
                            <span>Money Flow Chart Placeholder</span>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-white p-4 rounded-lg ">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            Recent Transactions
                        </h2>
                        <p className=" mb-4 text-gray-600 text-xs">
                            Here are your recent transactions
                        </p>
                        <div>
                            {recentTransactions.map(transaction => (
                                <div key={transaction.id}
                                     className="flex justify-between py-2 border-b last:border-b-0">
                                    <div>
                                        <div className="text-sm font-semibold">{transaction.description}</div>
                                        <div className="text-xs text-gray-600">{transaction.date}</div>
                                    </div>
                                    <span className={`
                                    text-sm font-bold ${transaction.amount > 0 ? 'text-green-700' : 'text-red-600'}
                                    `}>{transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default DashboardPage;
