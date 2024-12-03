"use client"

import { Activity, BookOpen, Code2, GraduationCap, LayoutDashboard, Settings, User } from 'lucide-react'
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { measureMemory } from 'vm'
import { useEffect, useState } from 'react'
import ShimmerButton from '@/components/ui/shimmer-button'
import { RainbowButton } from '@/components/ui/rainbow-button'

const MotionCard = motion(Card)

export default function DashboardPage() {
    const [greetingMsg, setGreetingMsg] = useState<string>("");
    const greetingsMessage = () => {
        let date = new Date();
        let time = date.getHours();
        console.log(time);

        if (time >= 0 && time < 12) {
            return "Good Morning, ";
        } else if (time > 12 && time < 16) {
            return "Good Afternoon, ";
        } else if (time > 16 && time < 24) {
            return "Good evening, ";
        }
        return "";
    }

    useEffect(() => {
        const msg = greetingsMessage();
        setGreetingMsg(msg);
    }, [])

    return (
        <div className="flex min-h-screen max-w-7xl py-20 mx-auto w-full">
            <main className="flex-1 overflow-auto">
                <div className="p-6">
                    <div className="flex w-full mb-6 justify-between gap-6 items-center">
                        <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl text-center">{greetingMsg}Niraj Jha</h1>
                        <RainbowButton>Profile</RainbowButton>
                    </div>
                    <div className="grid gap-6">
                        <motion.div
                            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 rounded-2xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        >
                            {
                                [
                                    { title: "Total Projects", icon: Activity, value: "4" },
                                    { title: "XP Gained", icon: GraduationCap, value: "250 xp" },
                                    { title: "Active Streak", icon: Activity, value: "3 days" },
                                    { title: "Coder'z coin", icon: Activity, value: "10 Coins" },
                                ].map((stat, index) => (
                                    <div className={`flex flex-col items-center gap-4 ${index < 3 ? "border-r-8 border-green-200 rounded-lg" : ""}`}>
                                        <stat.icon size={40} className="" />
                                        <div className='flex items-center w-full justify-between pl-6 pr-6'>
                                            <h1 className="text-md font-bold">{stat.title}</h1>
                                            <p className="text-xl font-semibold">{stat.value}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                        <motion.div
                            className="grid gap-6 border-2 rounded-2xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold">Active Projects</h2>
                                <RainbowButton>
                                    New Project
                                </RainbowButton>
                            </div>
                            <Separator />
                            <div className="grid gap-4">
                                <MotionCard className="shadow-2xl rounded-2xl p-3">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>Frontend Portfolio Website</CardTitle>
                                            <Badge>In Progress</Badge>
                                        </div>
                                        <CardDescription>A personal portfolio website using React and Tailwind CSS</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col justify-end gap-4 w-32">
                                            <Button className=''>Submit Project</Button>
                                        </div>
                                    </CardContent>
                                </MotionCard>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid gap-6 md:grid-cols-2 border-2 rounded-2xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <MotionCard className="relative overflow-hidden">
                                <CardHeader>
                                    <CardTitle>Learning Pathways</CardTitle>
                                    <CardDescription>Structured learning paths for different technologies</CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center p-6">
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                                    </div>
                                </CardContent>
                                <div className="absolute inset-0 bg-secondary/10" />
                            </MotionCard>
                            <MotionCard className="relative overflow-hidden">
                                <CardHeader>
                                    <CardTitle>Daily Challenges</CardTitle>
                                    <CardDescription>Practice coding with daily challenges</CardDescription>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center p-6">
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">Coming Soon</p>
                                    </div>
                                </CardContent>
                                <div className="absolute inset-0 bg-secondary/10" />
                            </MotionCard>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    )
}

