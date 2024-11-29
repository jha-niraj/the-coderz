"use client";

import SmoothScroll from '@/components/smoothscroll';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { ChevronDown, Search, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import TypingAnimation from '@/components/ui/typing-animation';

const projects = [
    {
        id: 1,
        name: 'PenCraft: Full Stack Blogging Platform',
        author: 'Akshit Lakhera',
        tags: ['JWT', 'React', 'Prisma', 'Tailwind CSS', 'Cloudflare Workers'],
        issues: ['good-first-issue'],
        description: 'A full stack platform for bloggers with powerful features and integrations.',
    },
    {
        id: 2,
        name: 'CodeCache',
        author: 'Yajush Vyas',
        tags: ['bun', 'clerk', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        issues: ['intermediate'],
        description: 'A code repository for storing and managing development projects.',
    },
    {
        id: 3,
        name: 'Hirehub',
        author: 'Yash Niteshbhai Gabani',
        tags: ['MERN'],
        issues: ['advanced'],
        description: 'A recruitment platform to connect talent with opportunities.',
    },
    {
        id: 4,
        name: 'Machine Learning Repos',
        author: 'Sanjay Viswanathan',
        tags: ['ML', 'NLP', 'Node.js'],
        issues: ['good-first-issue'],
        description: 'A collection of powerful machine learning tools and repositories.',
    },
    {
        id: 5,
        name: 'HelpOps-Hub',
        author: 'Azfar Alam',
        tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'markdown'],
        issues: ['intermediate'],
        description: 'A platform for managing DevOps tasks with a user-friendly interface.',
    },
];

const issueOptions = ['All Issues', 'good-first-issue', 'intermediate', 'advanced'];

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIssue, setSelectedIssue] = useState('All Issues');

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedIssue === 'All Issues' || project.issues.includes(selectedIssue))
    );

    return (
        <SmoothScroll>
            <div className="min-h-screen pt-28 sm:pt-32 flex flex-col gap-6 w-[90%] sm:w-[85%] mx-auto mb-10">
                <header className="w-full flex gap-3 sm:gap-0 flex-col sm:flex-row items-center justify-between">
                    <h1 className="text-4xl font-bold">Open Source Projects</h1>
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center">
                            <Input
                                type="text"
                                placeholder="Search projects..."
                                className=""
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="relative right-8 text-gray-400" />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    {selectedIssue}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    issueOptions.map((issue, index) => (
                                        <DropdownMenuItem key={index} onClick={() => setSelectedIssue(issue)}>
                                            {issue}
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        filteredProjects.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center pt-28 text-center">
                                <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                                    <Zap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Available</h3>
                                    <p className="text-gray-500">There are no projects available with the selected filters. Please try different criteria.</p>
                                </div>
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => {
                                return (
                                    <CardContainer className="inter-var w-full" key={index}>
                                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 border">
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                            >
                                                {project.name}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                            >
                                                {project.description}
                                            </CardItem>
                                            <CardItem
                                                as="p"
                                                translateZ="60"
                                                className="text-neutral-500 w-full text-sm max-w-sm pt-2 flex items-center justify-between dark:text-neutral-300"
                                            >
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="outline">Tech Stack</Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <ul className="flex flex-wrap gap-2">
                                                                {project.tags.map((tag, index) => (
                                                                    <li key={index} className="bg-black dark:bg-white text-white dark:text-black p-2 text-sm mr-2 rounded">
                                                                        {tag}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <p className="">
                                                    By {project.author}
                                                </p>
                                            </CardItem>
                                            <div className="flex justify-between items-center mt-5">
                                                <CardItem
                                                    translateZ={20}
                                                    as={Link}
                                                    href="#"
                                                    // target="__blank"
                                                    className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                                                >
                                                    Github
                                                </CardItem>
                                                <CardItem
                                                    translateZ={20}
                                                    as="button"
                                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                                >
                                                    View Live →
                                                </CardItem>
                                            </div>
                                        </CardBody>
                                    </CardContainer>
                                )
                            })
                        )
                    }
                </main>
            </div>
        </SmoothScroll>
    );
}
