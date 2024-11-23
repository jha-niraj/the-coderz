"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users2, LayoutDashboard, Settings, Menu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageTitle from './_components/pagetitle';
import UsetrChartCard from './_components/userchartcard';

const Sidebar = ({ isExpanded, setIsExpanded } : any) => {
    const navItems = [
        { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', href: '/admin' },
        { icon: <Users2 className="h-5 w-5" />, label: 'Users', href: '/admin/users' },
        { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/admin/settings' },
    ];

    return (
        <aside
            className={`fixed left-0 top-0 h-full bg-white border-r shadow-sm transform-gpu
        ${isExpanded ? 'w-64' : 'w-16'} 
        transition-[width] duration-300 ease-in-out z-50`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex items-center h-16 px-4 border-b">
                <div className="flex items-center overflow-hidden whitespace-nowrap">
                    <Menu className="h-6 w-6 min-w-[24px]" />
                    <span className={`ml-2 font-bold text-xl transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'
                        }`}>
                        Admin Panel
                    </span>
                </div>
            </div>
            <nav className="p-2 flex flex-col gap-1">
                {navItems.map((item, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={`w-full justify-start transition-all duration-300 ease-in-out
              ${isExpanded ? 'px-4' : 'px-2'}`}
                    >
                        <span className="min-w-[20px]">{item.icon}</span>
                        <span className={`ml-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'
                            }`}>
                            {item.label}
                        </span>
                    </Button>
                ))}
            </nav>
        </aside>
    );
};

const Dashboard = () => {
    const [ isSidebarExpanded, setIsSidebarExpanded ] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />

            <main className={`transition-[margin] duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-16'
                }`}>
                <div className="flex flex-col gap-5 h-full p-6 rounded-lg">
                    <div className="border-b">
                        <PageTitle title="Dashboard" />
                    </div>

                    <section className="flex flex-col lg:flex-row w-full h-full gap-4">
                        <section className="flex w-full lg:w-[70%] h-full flex-col gap-4">
                            <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between">
                                            <CardTitle>Users</CardTitle>
                                            <Users2 className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h1 className="text-3xl font-bold">30</h1>
                                        <CardDescription>
                                            <p className="text-green-600">20% more than last week</p>
                                        </CardDescription>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <div className="flex justify-between">
                                            <CardTitle>Mentors</CardTitle>
                                            <Users2 className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h1 className="text-3xl font-bold">20</h1>
                                        <CardDescription>
                                            <p className="text-green-600">10% more than last week</p>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid w-full h-full grid-cols-1 gap-4">
                                <UsetrChartCard data={[
                                    { date: "2024-11-24", count: 20 },
                                    { date: "2024-11-25", count: 25 },
                                    { date: "2024-11-26", count: 30 },
                                    { date: "2024-11-27", count: 35 }
                                ]} />
                            </div>
                        </section>

                        <section className="w-full lg:w-[30%]">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Activities</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <p className="text-gray-500">No recent activities</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;