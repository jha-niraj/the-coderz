import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Star, Clock, Trophy, ArrowRight, FileCode, Construction, Github, User } from 'lucide-react';
import SmoothScroll from '@/components/smoothscroll';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
    const quotes = [
        {
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
        },
        {
            text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
            author: "Brian Herbert"
        }
    ];
    const learningPaths = [
        {
            title: "Frontend Development",
            progress: 65,
            totalModules: 12,
            completedModules: 8,
            estimatedTime: "3 months",
            skills: ["React", "TypeScript", "CSS"],
            level: "Intermediate"
        },
        {
            title: "UI/UX Design",
            progress: 45,
            totalModules: 8,
            completedModules: 4,
            estimatedTime: "2 months",
            skills: ["Figma", "Design Systems", "User Research"],
            level: "Beginner"
        },
        {
            title: "Backend Development",
            progress: 25,
            totalModules: 10,
            completedModules: 2,
            estimatedTime: "4 months",
            skills: ["Node.js", "Express", "MongoDB"],
            level: "Advanced"
        }
    ];
    const projects = [
        {
            title: "E-commerce Dashboard",
            description: "A modern dashboard for managing online store operations",
            status: "IN_PROGRESS",
            completion: 75,
            dueDate: "Nov 15, 2024",
            priority: "High",
            technologies: ["React", "TypeScript", "Tailwind"]
        },
        {
            title: "Weather App",
            description: "Real-time weather tracking application with forecasting",
            status: "COMPLETED",
            completion: 100,
            dueDate: "Oct 20, 2024",
            priority: "Medium",
            technologies: ["React", "API Integration", "CSS"]
        },
        {
            title: "Task Management System",
            description: "Collaborative project management tool",
            status: "PLANNING",
            completion: 15,
            dueDate: "Dec 1, 2024",
            priority: "Medium",
            technologies: ["React", "Node.js", "MongoDB"]
        }
    ];
    const upcomingFeatures = [
        {
            icon: Construction,
            title: "Enhanced Dashboard Analytics",
            description: "We're developing a comprehensive dashboard to help you track your project submissions and progress in real-time.",
        },
        {
            icon: Github,
            title: "Curated Open Source Opportunities",
            description: "A carefully selected list of open-source projects will be available, matched to your skill level and interests.",
        },
        {
            icon: User,
            title: "Advanced Profile Management",
            description: "Enhanced profile customization including resume uploads and profile image management capabilities.",
        }
    ];
    

    const getStatusColor = (status: any) => {
        const colors = {
            'IN_PROGRESS': 'bg-blue-100 text-blue-800',
            'COMPLETED': 'bg-green-100 text-green-800',
            'PLANNING': 'bg-purple-100 text-purple-800'
        };
        //@ts-ignore
        return colors[status] || 'bg-gray-100 text-gray-800';
    };
    const getPriorityColor = (priority: any) => {
        const colors = {
            'High': 'text-red-500',
            'Medium': 'text-yellow-500',
            'Low': 'text-green-500'
        };
        //@ts-ignore
        return colors[priority] || 'text-gray-500';
    };

    return (
        <section>
            <div className="min-h-screen py-24">
                <div className="max-w-7xl mx-auto p-6 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                            <CardContent className="p-8">
                                <h1 className="text-3xl font-bold mb-4">Dashboard 0.1 Coming Soon!</h1>
                                <p className="text-lg opacity-90">We&apos;re working on something exciting. Stage 0.2 is under development with amazing new features.</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="dark:hover:border-2 dark:hover:rounded-2xl"
                        >
                            <Link href="/resources" className="block">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">Explore Resources</h3>
                                            <ArrowRight className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <p className="mt-2 text-black dark:text-gray-200">Access our curated collection of learning materials and resources.</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="dark:hover:border-2 dark:hover:rounded-2xl"
                        >
                            <Link href="/projects" className="block">
                                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold">View Projects</h3>
                                            <ArrowRight className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <p className="mt-2 text-black dark:text-gray-200">Explore available projects and start building your portfolio.</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-10"
                    >
                        <Card className="mt-12">
                            <CardHeader>
                                <h2 className="text-2xl font-bold">What&apos;s Coming in Update 0.2</h2>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {upcomingFeatures.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                        >
                                            <Card className="border-l-4 border-indigo-500">
                                                <CardContent className="p-4">
                                                    <feature.icon className="w-8 h-8 text-indigo-600 mb-3" />
                                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                                    <p className="text-sm text-black dark:text-gray-200">{feature.description}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Card className="bg-gradient-to-r from-purple-100 to-indigo-100">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-2xl font-bold mb-4 text-black dark:text-black">Want to Contribute?</h2>
                                <p className="text-black dark:text-black mb-6">We welcome developers who want to help build the future of learning. Join our community of contributors!</p>
                                <Link href="https://github.com/thecoderzhub" target="_blank">
                                    <Button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                    >
                                        <FileCode className="w-4 h-4 mr-2" />
                                        Contribute to Project
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StudentDashboard;