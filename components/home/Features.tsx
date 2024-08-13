"use client";

import React from 'react';
import {ChartBarIcon, CreditCardIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";


const features = [
    {
        title: 'Track Your Spending',
        description: 'Categorize your expenses and see where your money goes.',
        icon: CreditCardIcon,
    },
    {
        title: 'Set Budgets',
        description: 'Set budgets for different categories and stick to them.',
        icon: CurrencyDollarIcon,
    },
    {
        title: 'Gain Insights',
        description: 'Visualize your financial health with charts and reports.',
        icon: ChartBarIcon,
    },
];

const Features: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <feature.icon className="h-12 w-12 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
