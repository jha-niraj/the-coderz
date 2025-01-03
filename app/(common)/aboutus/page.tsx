"use client"

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, BringToFront, Target, Users, Rocket, RefreshCcw, LucideIcon } from 'lucide-react';
import SmoothScroll from '@/components/smoothscroll';
import abhinav from "./images/abhinav.jpeg";
import harsh from "./images/harsh.jpeg";
import nirajjha from "./images/nirajjha (copy).jpeg";
import tejasvi from "./images/tejasvi.jpg";
import omsingh from "./images/omsingh.jpeg";
import shelly from "./images/shelly.jpeg";
import ansh from "./images/ansh.jpeg";
import priyanshu from "./images/priyanshu.jpeg";
import { RainbowButton } from '@/components/ui/rainbow-button';
import { cn } from "@/app/lib/utils";
import Marquee from "@/components/ui/marquee";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

const theCoderzFamily = [
    {
        name: "V Abhinava Shankar",
        img: abhinav,
        role: "Management/Reasearch and Development",
        linkedin: "https://www.linkedin.com/in/abhinavashankar/",
        github: "https://github.com/AbhinavaShankar",
        instagram: "https://www.instagram.com/_shankaranvinodh_"
    },
    {
        name: "Harsh Pandey",
        img: harsh,
        role: "Public Relations Head",
        linkedin: "https://www.linkedin.com/in/harsh-pandey0504",
        github: "https://github.com/HarshPandey-5804",
        instagram: "https://www.instagram.com/just._.harsh__/"
    },
    {
        name: "Niraj Jha",
        img: nirajjha,
        role: "Lead Developer",
        linkedin: "https://linkedin.com/in/janedoe",
        github: "https://github.com/jha-niraj",
        instagram: "https://instagram.com/janedoe"
    },
    {
        name: "Tejasvi Sinha",
        img: tejasvi,
        role: "Social Media Head",
        linkedin: "https://www.linkedin.com/in/tejasvi-sinha-7a784024b/",
        github: "https://github.com/Tejasvi-sinha",
        instagram: "https://www.instagram.com/_divinetej?igsh=emplNW5lNHpydmcz"
    },
    {
        name: "Vaishnavi Raj",
        img: shelly,
        role: "Research and Development",
        linkedin: "https://linkedin.com/in/vaishnavirajj",
        github: "https://github.com/vaishnavirajj",
        instagram: "https://instagram.com/thshelley_"
    },
    {
        name: "Ansh Pratap Singh",
        img: ansh,
        role: "Social Media Team",
        linkedin: "https://www.linkedin.com/in/ansh-singh222",
        github: "https://github.com/ANSH200418",
        instagram: "https://www.instagram.com/_ansh__45?igsh=YXQ3NTllaTI4c2Nj"
    },
    {
        name: "Sangam Kumar",
        img: nirajjha,
        role: "Social Media and Content Strategist",
        linkedin: "https://www.linkedin.com/in/sangam-kumar-09578226a/",
        github: "https://github.com/kumarSangam100",
        instagram: "https://instagram.com/janedoe"
    },
    {
        name: "Om Singh",
        img: omsingh,
        role: "Tech Team / Deployment Head",
        linkedin: "https://www.linkedin.com/in/byteom/",
        github: "https://github.com/byteom",
        instagram: "https://www.instagram.com/bytesom"
    },
    {
        name: "Priyanshu Singh",
        img: priyanshu,
        role: "App Development Team",
        linkedin: "https://www.linkedin.com/in/priyanshusingh-in",
        github: "https://github.com/priyanshusingh-in",
        instagram: "https://www.instagram.com/singh.sde",
        bio: "Jane is a visionary leader with 10+ years of experience in EdTech. She's passionate about making CS education accessible to all."
    },
]

interface TheCoderZFamilyProps {
    name: string;
    img: string | StaticImageData;
    role: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
}
const TheCoderZFamily = ({
    name,
    img,
    role,
    linkedin,
    github,
    instagram
}: TheCoderZFamilyProps) => {
    return (
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[200px] w-full rounded-xl p-2 border">
                <div className="flex flex-row items-center gap-3 h-full">
                    {/* <CardItem translateZ="100" className="">
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt={`${name}'s profile picture`}
                            className="rounded-full object-cover group-hover/card:shadow-xl w-[120px] h-[120px]"
                        />
                    </CardItem> */}
                    <div className="flex flex-col justify-between flex-grow gap-6">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-center text-neutral-600 dark:text-white"
                            >
                                {name}
                            </CardItem>
                            <CardItem
                                translateZ="40"
                                className="text-sm text-neutral-500 text-center dark:text-neutral-300"
                            >
                                {role}
                            </CardItem>
                        </div>
                        <div className="flex w-full justify-around">
                            {linkedin && (
                                <Link
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 w-8 hover:bg-purple-50 border-2 border-gray-400 rounded-lg dark:hover:bg-purple-900/20 transition-colors flex items-center justify-center"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            )}
                            {github && (
                                <Link
                                    href={github}
                                    target="_blank"
                                    className="h-8 w-8 hover:bg-purple-50 border-2 border-gray-400 rounded-lg dark:hover:bg-purple-900/20 transition-colors flex items-center justify-center"
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                            )}
                            {instagram && (
                                <Link
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 w-8 hover:bg-purple-50 border-2 border-gray-400 rounded-lg dark:hover:bg-purple-900/20 transition-colors flex items-center justify-center"
                                >
                                    <Instagram className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
};

interface AboutUsSectionProps {
    title: string;
    content: string;
    index: number;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ title, content, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16"
        >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102 border-l-4 border-blue-500 dark:border-blue-400">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6">
                    <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                        <span className="bg-clip-text text-black dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            {title}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white dark:bg-gray-800">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">{content}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const goalIcons = [Target, Users, BringToFront, Rocket, RefreshCcw];
interface GoalCardProps {
    goal: string;
    icon: LucideIcon;
    index: number;
}
const GoalCard = ({ goal, icon: Icon, index }: GoalCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full"
    >
        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-medium">{goal}</p>
            </CardContent>
        </Card>
    </motion.div>
);

const ourgoals = [
    "Provide comprehensive, up-to-date computer science education",
    "Foster a vibrant community of learners and contributors",
    "Bridge the gap between academia and industry through practical projects",
    "Empower students with the skills and confidence to succeed in the tech industry",
    "Continuously innovate our platform based on student feedback and industry trends"
]
export default function AboutUs() {
    return (
        <SmoothScroll>
            <div className="min-h-screen text-black dark:text-white pt-32 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-6xl font-bold text-center mb-8"
                    >
                        About Us
                    </motion.h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className='"'>
                            <AboutUsSection
                                title="Our Mission"
                                content="We are on a mission to revolutionize computer science education by providing a comprehensive, accessible, and engaging platform for students to learn, grow, and thrive in the world of technology. Our goal is to empower the next generation of tech innovators and problem-solvers."
                                index={0}
                            />
                            <AboutUsSection
                                title="What We Do"
                                content="Our platform is a one-stop solution for computer science enthusiasts. We offer interactive courses, challenging quizzes, and opportunities for open-source contributions. Our vibrant WhatsApp and Discord communities foster collaboration and peer learning, creating a supportive environment for growth."
                                index={1}
                            />
                        </div>
                        <div>
                            <AboutUsSection
                                title="Our Vision"
                                content="We envision a world where quality computer science education is accessible to everyone, regardless of their background or location. By bridging the gap between theoretical knowledge and practical skills, we aim to prepare students for real-world challenges in the ever-evolving tech industry."
                                index={2}
                            />
                            <AboutUsSection
                                title="Freelance Agency"
                                content="As part of our commitment to practical learning, we run a freelance agency that provides students with real-world experience and income opportunities. By distributing client projects to deserving students, we help them build impressive portfolios, develop crucial professional skills, and earn while they learn."
                                index={3}
                            />
                        </div>
                    </div>

                    <Card className="border-gray-800 mb-16">
                        <CardContent className="p-6">
                            <h2 className="text-4xl font-bold mb-4 text-center ">Our Goals</h2>
                            <ul className="list-disc pl-6 space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {
                                    ourgoals.map((goal, index) => {
                                        return (
                                            <GoalCard
                                                key={index}
                                                goal={goal}
                                                icon={goalIcons[index]}
                                                index={index}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </CardContent>
                    </Card>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-center">The Coder&apos;z Family</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
                            {
                                theCoderzFamily.map((member, index) => (
                                    <TheCoderZFamily
                                        key={index}
                                        name={member.name}
                                        img={member.img}
                                        role={member.role}
                                        linkedin={member.linkedin}
                                        github={member.github}
                                        instagram={member.instagram}
                                    />
                                ))
                            }
                        </div>
                        <Link href="mailto:thecoderzofficial@gmail.com" className='mx-auto pt-6'>
                            <RainbowButton>Join Us</RainbowButton>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </SmoothScroll>
    )
};