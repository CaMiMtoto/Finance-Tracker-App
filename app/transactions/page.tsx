"use client"
import React, {useState} from 'react';
import {FaFilter, FaSort, FaSearch} from 'react-icons/fa';
import Authenticated from "@/components/layouts/Authenticated";
import {TbSearch} from "react-icons/tb";

interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    category: string;
}

const dummyTransactions: Transaction[] = [
    {id: 1, date: '2024-08-01', description: 'Groceries', amount: -50, category: 'Expense'},
    {id: 2, date: '2024-08-02', description: 'Salary', amount: 1500, category: 'Income'},
    {id: 3, date: '2024-08-03', description: 'Electricity Bill', amount: -100, category: 'Expense'},
    // Add more dummy transactions
];

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>(dummyTransactions);
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

    const filteredTransactions = transactions
        .filter(transaction =>
            transaction.description.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            } else {
                return b.amount - a.amount;
            }
        });

    return (
        <Authenticated>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Transactions</h1>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center border rounded-md">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="rounded form-input"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setSortBy(sortBy === 'date' ? 'amount' : 'date')}
                            className="bg-gray-800 text-white p-2 rounded-md flex items-center"
                        >
                            <FaSort className="mr-2"/>
                            Sort by {sortBy === 'date' ? 'Amount' : 'Date'}
                        </button>
                        <button
                            className="bg-gray-800 text-white p-2 rounded-md flex items-center"
                        >
                            <FaFilter className="mr-2"/>
                            Filter
                        </button>
                    </div>
                </div>

                <div  className="overflow-hidden  border border-gray-300 rounded-md">
                    <table className="min-w-full bg-white ">
                        <thead>
                        <tr className="border-b border-gray-300">
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Description</th>
                            <th className="p-4 text-right">Amount</th>
                            <th className="p-4 text-left">Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map(transaction => (
                                <tr key={transaction.id} className="border-b border-gray-300">
                                    <td className="p-4">{transaction.date}</td>
                                    <td className="p-4">{transaction.description}</td>
                                    <td className={`p-4 text-right ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        ${transaction.amount.toFixed(2)}
                                    </td>
                                    <td className="p-4">{transaction.category}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-4 text-center">No transactions found</td>
                            </tr>
                        )}
                        </tbody>
                    </table>

                </div>
                {/* Pagination or Load More Button */}
                <div className="flex justify-center mt-4">
                    <button className="bg-gray-800 text-white p-2 rounded-md">Load More</button>
                </div>
            </div>
        </Authenticated>
    );
};

export default Transactions;
