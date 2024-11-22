"use client"

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("./linechart"), {
    ssr: false,
});

interface MenteeChartCardProps {
    data: {
        date: string,
        count: number
    }[]
}

export default function UsetrChartCard({ data }: MenteeChartCardProps) {
    const getCurrentMonth = () => {
        return new Date().toLocaleString('default', { month: 'long' });
    };

    const [selectedMonth, setSelectedMonth] = useState<string>(getCurrentMonth());
    const [filteredData, setFilteredData] = useState<MenteeChartCardProps['data']>([]);

    const filterDataByMonth = useCallback((month: string) => {
        if (month === "All") {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => {
                const itemDate = new Date(item.date);
                return itemDate.toLocaleString('default', { month: 'long' }) === month;
            });
            setFilteredData(filtered);
        }
    }, [data]);

    useEffect(() => {
        filterDataByMonth(selectedMonth);
    }, [selectedMonth, data, filterDataByMonth]);

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
    };

    return (
        <Card className="h-full p-2 rounded-lg flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <p className="p-4 font-semibold">Mentor&apos;s Overview</p>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-xl font-medium">{selectedMonth}</DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -right-6 top-1">
                            <DropdownMenuItem onSelect={() => handleMonthSelect("All")}>All</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("January")}>January</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("February")}>February</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("March")}>March</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("April")}>April</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("May")}>May</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("June")}>June</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("July")}>July</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("August")}>August</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("September")}>September</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("October")}>October</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("November")}>November</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleMonthSelect("December")}>December</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <LineChart registrationData={filteredData} />
        </Card>
    );
}