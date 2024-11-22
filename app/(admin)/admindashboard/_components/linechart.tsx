"use client";

import React, { useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

export interface LineChartDataProps {
    registrationData: {
        date: string,
        count: number
    }[]
}

const LineChart = ({ registrationData } : LineChartDataProps) => {
    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Daily Mentee Registrations",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Date",
                },
                ticks: {
                    maxTicksLimit: 5, // This is helpful for choosing how many values you wnat in rhe 
                    callback: function(value: any, index: any, values: any) {
                        const today = new Date();
                        const date = new Date(today.getTime() - (values.length - index - 1) * 24 * 60 * 60 * 1000);
                        return date.getDate(); // Display the day of the month
                    },
                    autoSkip: false,
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Number of Users",
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                    precision: 0,
                    min: 0
                },
                suggestedMax: function(context: { max: number; }) {
                    const max = context.max;
                    return Math.ceil(max / 5) * 5;
                }
            },
        },
    };

    // const chartData = useMemo(() => {
    //     if (!registrationData || registrationData.length === 0) {
    //         return null;
    //     }

    //     // Find the start and end date of the month
    //     const dates = registrationData.map(item => new Date(item.date));
    //     const startDate = new Date(Math.min(...dates.map(d => d.getTime())));
    //     const endDate = new Date(Math.max(...dates.map(d => d.getTime())));
        
    //     startDate.setDate(1); // Set to first day of the month
    //     endDate.setDate(new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate());

    //     const allDates = [];
    //     for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    //         allDates.push(new Date(d));
    //     }

    //     const dataMap = new Map(registrationData.map(item => [item.date, item.count]));

    //     const data = {
    //         labels: allDates,
    //         datasets: [
    //             {
    //                 label: "New Users",
    //                 data: allDates.map(date => {
    //                     const dateString = date.toISOString().split('T')[0];
    //                     return dataMap.get(dateString) || 0;
    //                 }),
    //                 borderColor: "rgb(75, 192, 192)",
    //                 backgroundColor: "rgba(75, 192, 192, 0.5)",
    //             },
    //         ],
    //     };

    //     return data;
    // }, [registrationData]);

    const chartData = useMemo(() => {
        if (!registrationData || registrationData.length === 0) {
            return null;
        }

        // Get today's date
        const today = new Date();
        const last5Days = [];

        // Generate the last 5 days including today
        for (let i = 0; i < 5; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            last5Days.push(date.toISOString().split('T')[0]); 
        }

        const dataMap = new Map(registrationData.map(item => [item.date, item.count]));

        const data = {
            labels: last5Days.reverse(),
            datasets: [
                {
                    label: "New Users",
                    data: last5Days.map(date => dataMap.get(date) || 0),
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                },
            ],
        };

        return data;
    }, [registrationData]);

    if (!chartData) {
        return <div className="h-full flex items-center justify-center text-xl font-medium">No data available</div>;
    }

    return (
        <div className="h-[400px] lg:h-[450px]">
            <Line options={options} data={chartData} />
        </div>
    );
};

export default LineChart;