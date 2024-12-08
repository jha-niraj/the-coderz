"use client"

import { Activity, ArrowRight, BookOpen, Code2, FolderPlus, Award, Flame, Coins, Binary, Box, Database, Layout, Server } from 'lucide-react'
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import ShimmerButton from '@/components/ui/shimmer-button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import Link from 'next/link';
import ProjectCard from './projectcard';
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { getActiveProjectLists, getSubmittedApprovedProjectLists, userTotalProjectCount } from '@/actions/project.action';
import { UserProjectProps } from '@/app/types';

const MotionCard = motion(Card);

const courses = [
    {
        title: "C Programming Fundamentals",
        description: "Master the basics of C programming with hands-on projects and system programming concepts",
        icon: Binary,
        color: "bg-green-500/20 dark:bg-green-500/10",
        iconColor: "text-green-600 dark:text-green-500",
        href: "#",
        students: "2.3k"
    },
    {
        title: "Advanced C++ Development",
        description: "Learn modern C++ features, STL, and object-oriented programming principles",
        icon: Code2,
        color: "bg-blue-500/20 dark:bg-blue-500/10",
        iconColor: "text-blue-600 dark:text-blue-500",
        href: "#",
        students: "1.8k"
    },
    {
        title: "React.js Mastery",
        description: "Build modern web applications with React, Hooks, and state management",
        icon: Box,
        color: "bg-cyan-500/20 dark:bg-cyan-500/10",
        iconColor: "text-cyan-600 dark:text-cyan-500",
        href: "#",
        students: "4.2k"
    },
    {
        title: "Java Enterprise Development",
        description: "Comprehensive Java course covering core concepts to enterprise applications",
        icon: Database,
        color: "bg-orange-500/20 dark:bg-orange-500/10",
        iconColor: "text-orange-600 dark:text-orange-500",
        href: "#",
        students: "3.1k"
    },
    {
        title: "Front-End Development",
        description: "Master HTML, CSS, JavaScript, and modern front-end frameworks",
        icon: Layout,
        color: "bg-purple-500/20 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-500",
        href: "#",
        students: "5.6k"
    },
    {
        title: "Back-End Architecture",
        description: "Learn server-side programming, APIs, and database management",
        icon: Server,
        color: "bg-rose-500/20 dark:bg-rose-500/10",
        iconColor: "text-rose-600 dark:text-rose-500",
        href: "#",
        students: "2.9k"
    },
]

export default function DashboardPage() {
    const [greetingMsg, setGreetingMsg] = useState<string>("");
    const [ totalProjects, setTotalProjects ] = useState<number | null>(null);
    const [ activeProjectLists, setActiveProjectLists ] = useState<UserProjectProps[] | null>(null);
    const [ submittedApprovedProjectLists, setSubmittedApprovedProjectLists ] = useState<UserProjectProps[] | null>(null);

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
    useEffect(() => {
        const fetchTotalProjectCount = async() => {
            const response = await userTotalProjectCount();
            const activeProjectLists = await getActiveProjectLists();
            const submittedApprovedProjectLists = await getSubmittedApprovedProjectLists();
            console.log(activeProjectLists);
            console.log(submittedApprovedProjectLists);

            setActiveProjectLists(activeProjectLists);
            setSubmittedApprovedProjectLists(submittedApprovedProjectLists);
            setTotalProjects(response);
        }
        fetchTotalProjectCount();
    }, [])

    const stats = [
        {
            title: "Total Projects",
            icon: FolderPlus,
            value: totalProjects,
            bgColor: "bg-blue-50 dark:bg-blue-900/30",
            iconColor: "text-blue-600 dark:text-blue-400",
            valueColor: "text-blue-800 dark:text-blue-200"
        },
        {
            title: "XP Gained",
            icon: Award,
            value: "250 xp",
            bgColor: "bg-green-50 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
            valueColor: "text-green-800 dark:text-green-200"
        },
        {
            title: "Active Streak",
            icon: Flame,
            value: "3 days",
            bgColor: "bg-orange-50 dark:bg-orange-900/30",
            iconColor: "text-orange-600 dark:text-orange-400",
            valueColor: "text-orange-800 dark:text-orange-200"
        },
        {
            title: "Coder'z Coin",
            icon: Coins,
            value: "10 Coins",
            bgColor: "bg-purple-50 dark:bg-purple-900/30",
            iconColor: "text-purple-600 dark:text-purple-400",
            valueColor: "text-purple-800 dark:text-purple-200"
        }
    ];

    return (
        <div className="flex min-h-screen max-w-7xl py-20 mx-auto w-full">
            <main className="flex-1 overflow-auto">
                <div className="p-6">
                    <div className="flex w-full mb-6 justify-between gap-6 items-center">
                        <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl text-center">{greetingMsg}Niraj Jha</h1>
                        <RainbowButton className="w-32">Profile</RainbowButton>
                    </div>
                    <div className="grid gap-12">
                        <motion.div
                            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        >
                            {
                                stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className={`
                                            ${stat.bgColor} 
                                            rounded-2xl overflow-hidden border border-transparent transition-all duration-300 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transform hover:-translate-y-2
                                        `}
                                        >
                                            <div className="p-6 flex items-center space-x-4">
                                                <div className={`
                                                    ${stat.bgColor} 
                                                    ${stat.iconColor} 
                                                    p-3 rounded-full transition-transform group-hover:scale-110 shadow-sm
                                                `}
                                                >
                                                    <stat.icon size={40} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                                        {stat.title}
                                                    </p>
                                                    <p className={`
                                                        ${stat.valueColor} 
                                                        text-2xl font-bold tracking-tight transition-colors group-hover:text-opacity-80
                                                    `}
                                                    >
                                                        {stat.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                        <motion.div
                            className="grid gap-2 w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex w-full justify-between">
                                <h1 className="text-2xl font-semibold">Projects</h1>
                                <RainbowButton className="w-48">
                                    New Project
                                </RainbowButton>
                            </div>
                            <Tabs defaultValue="active" className="space-y-4 w-full">
                                <div className="flex items-center w-full justify-between mb-4">
                                    <TabsList>
                                        <TabsTrigger value="active">Active Projects</TabsTrigger>
                                        <TabsTrigger value="completed">Submitted/Approved Projects</TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="active" className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            activeProjectLists?.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        title={project.projectName}
                                                        description=""
                                                        status="In Progress"
                                                        isSubmittable={true}
                                                        githubLink='#'
                                                        liveLink='#'
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </TabsContent>
                                <TabsContent value="completed" className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {
                                            submittedApprovedProjectLists?.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        title={project.projectName}
                                                        description=""
                                                        status={ project.isSubmitted ? project.isApproved ? "Approved" : "" : "Submitted" }
                                                        isSubmittable={false}
                                                        githubLink={project.githubUrl!}
                                                        liveLink={project.liveUrl!}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </motion.div>
                        <motion.div
                            className="grid gap-2 w-full mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex w-full justify-between">
                                <h1 className="text-2xl font-semibold">Pathways</h1>
                                <RainbowButton className="w-48">
                                    New Pathways
                                </RainbowButton>
                            </div>
                            <Tabs defaultValue="active" className="space-y-4 w-full">
                                <div className="flex items-center w-full justify-between mb-4">
                                    <TabsList>
                                        <TabsTrigger value="active">Active Pathways</TabsTrigger>
                                        <TabsTrigger value="completed">Completed Pathways</TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="active" className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <ProjectCard
                                            title="Front-End Development"
                                            description="A personal portfolio website using React and Tailwind CSS"
                                            status="In Progress"
                                            isSubmittable={true}
                                            githubLink="#"
                                            liveLink="#"
                                        />
                                        <ProjectCard
                                            title="Front-End Development"
                                            description="A personal portfolio website using React and Tailwind CSS"
                                            status="In Progress"
                                            isSubmittable={true}
                                            githubLink="#"
                                            liveLink="#"
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="completed" className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <ProjectCard
                                            title="Development Foundations"
                                            description="A comprehensive admin panel for an online store"
                                            status="Submitted"
                                            isSubmittable={false}
                                            githubLink="#"
                                            liveLink="#"
                                        />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </motion.div>
                    </div>
                    <section className="space-y-4 py-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Get started with our free courses</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                courses.map((course) => (
                                    <CardContainer className="inter-var w-full" key={course.title}>
                                        <CardBody
                                            className="bg-gray-50 h-56 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-4 border"
                                        >
                                            <div className="flex flex-col justify-between h-full">
                                                <div>
                                                    <div className="flex items-start justify-between mb-4">
                                                        <CardItem
                                                            translateZ="50"
                                                            className={`size-12 rounded-lg ${course.color} p-3`}
                                                        >
                                                            <course.icon className={`size-6 ${course.iconColor}`} />
                                                        </CardItem>
                                                        <CardItem
                                                            translateZ="50"
                                                            as="div"
                                                            className="flex items-center gap-2"
                                                        >
                                                            <Badge variant="secondary" className="pointer-events-none">
                                                                COURSE
                                                            </Badge>
                                                            <Badge variant="outline" className="pointer-events-none">
                                                                Beginner
                                                            </Badge>
                                                        </CardItem>
                                                    </div>
                                                    <CardItem
                                                        translateZ="60"
                                                        as="h3"
                                                        className="font-bold text-neutral-600 dark:text-white"
                                                    >
                                                        {course.title}
                                                    </CardItem>
                                                    <CardItem
                                                        as="p"
                                                        translateZ="60"
                                                        className="text-sm text-neutral-800 dark:text-neutral-300 mt-2"
                                                    >
                                                        {course.description}
                                                    </CardItem>
                                                </div>
                                                <CardItem
                                                    translateZ="60"
                                                    as="div"
                                                    className="flex w-full items-center justify-between"
                                                >
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <span>{course.students} students</span>
                                                    </div>

                                                    <Button asChild variant="ghost" className="gap-2">
                                                        <Link href={course.href}>
                                                            Get Started
                                                            <ArrowRight className="size-4" />
                                                        </Link>
                                                    </Button>
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                ))
                            }
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Take your skills to the next level.</h3>
                                <Button className="w-full sm:w-auto">Explore all Content</Button>
                            </div>
                        </div>
                    </section>
                    <motion.div
                        className="grid gap-6 md:grid-cols-2 rounded-2xl p-4"
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
            </main >
        </div >
    )
}