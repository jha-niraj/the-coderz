"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { categories, realProjects } from './projectsdata/project';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Monitor, Smartphone, Sparkles, Terminal, Zap } from 'lucide-react';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useToast } from '@/hooks/use-toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Link from 'next/link';
import projectMainImage from "./a_group_of_college_students_including_3.jpeg";

type DifficultyLevel = "All" | "Beginner" | "Intermediate" | "Advanced";

interface Resource {
    documentation: string[];
    tools: string[];
}

interface ProjectGuide {
    description: string;
    desktopImage?: string;
    mobileImage?: string;
    learningOutcomes: string[];
    keyFeatures: string[];
    prerequisites: string[];
    skillsGained: string[];
    steps: string[];
    resources: Resource;
}

interface Project {
    id: string;
    title: string;
    description: string;
    difficulty: DifficultyLevel;
    tags: string[];
    guide: ProjectGuide;
}

// Type assertion for your realProjects data
const typedProjects = realProjects as Project[];

const difficultyLevel: DifficultyLevel[] = ["All", "Beginner", "Intermediate", "Advanced"];

const ProjectsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const { toast } = useToast();
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session?.user) {
            router.push("/signin");
        }
    }, [session, router])

    const filteredProjects = typedProjects.filter((project) => {
        const categoryMatch = activeCategory === 'All' || project.tags.includes(activeCategory);
        const difficultyMatch = selectedLevel === 'All' || project.difficulty === selectedLevel;
        return categoryMatch && difficultyMatch;
    });

    const handleBuildFromScratch = () => {
        toast({
            title: "Coming Soon...",
            description: "We are working on this features which enables you to learn at you own pace while following simple and understanding instructions.",
            variant: "default"
        });
    }

    return (
        <section>
            <div className="min-h-screen flex flex-col gap-16 text-black dark:text-white pt-28 sm:pt-32">
                <header className="max-w-7xl mx-auto flex flex-col gap-16">
                    <div className="flex items-center justify-center w-full">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-6 lg:px-8 gap-8 md:gap-12">
                            <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-8">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left">
                                    Build real world projects
                                    <br />
                                    <span className="text-emerald-500">that matter&apos;s</span>
                                </h1>
                                <p className="text-black dark:text-white text-base sm:text-lg text-center md:text-left">
                                    Follow simple instructions to build production-ready projects. Learn by doing with our guided project-based approach.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                                    <Link href='#project_section'>
                                        <RainbowButton>Start First Project</RainbowButton>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-400 justify-center md:justify-start">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 border-2 border-gray-950 flex items-center justify-center"
                                            >
                                                <Sparkles size={14} className="text-emerald-500" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs sm:text-sm text-black dark:text-white">Join 100+ developers building projects</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end">
                                <Image
                                    src={projectMainImage}
                                    alt="Project Main Image"
                                    height={150}
                                    width={300}
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8">Why do projects?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                                <div className="text-purple-600 mb-4">
                                    <Image 
                                        className='w-20' 
                                        src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=" 
                                        alt="" 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Become job ready</h3>
                                <p className="text-center text-black dark:text-white">
                                    Kickstart your career by building stellar proof of work
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
                                <div className="text-green-600 mb-4">
                                    <Image 
                                        className='w-16' 
                                        src="https://cdn-icons-png.flaticon.com/512/751/751355.png" 
                                        alt="" 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Learn by doing</h3>
                                <p className="text-center text-black dark:text-white">
                                    Upskill by building hands-on projects with stepwise guidance
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm" id="project_section">
                                <div className="text-yellow-600 mb-4">
                                    <Image 
                                        className='w-20' 
                                        src="https://cdn-icons-png.flaticon.com/512/6165/6165577.png" 
                                        alt="" 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Get feedback</h3>
                                <p className="text-center text-black dark:text-white">
                                    Grow with the community and get feedback from mentors
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-medium text-center">Explore projects on different tech stacks</h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:items-center sm:justify-between gap-4 py-4">
                        <motion.div layout className="flex flex-wrap items-center justify-center gap-2">
                            {
                                categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`text-black text-sm font-small dark:text-black p-1 pl-2 pr-2 rounded-lg
                                        ${activeCategory === category ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white text-black"}
                                        ${activeCategory.includes(category) ? "hover:bg-sky-100 hover:text-black" : "opacity-50 cursor-not-allowed"}
                                    `}
                                        onClick={() => activeCategory.includes(category) && setActiveCategory(category)}
                                        disabled={!activeCategory.includes(category)}
                                    >
                                        <span className="flex items-center gap-2">
                                            {category}
                                        </span>
                                    </button>
                                ))
                            }
                        </motion.div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    {selectedLevel}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {
                                    difficultyLevel.map((level, index) => (
                                        <DropdownMenuItem key={index} onClick={() => setSelectedLevel(level)}>
                                            {level}
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-full lg:grid-cols-3 gap-6 min-h-[300px]">
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
                                    filteredProjects.map((project) => (
                                        <CardContainer className="inter-var w-full" key={project.id}>
                                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] h-[250px] border-black/[0.1] w-full rounded-xl p-4 border">
                                                <div className="flex flex-col justify-between h-full">
                                                    <div>
                                                        <div className="flex items-start justify-between mb-4">
                                                            <CardItem
                                                                translateZ="50"
                                                                className="text-xl font-semibold text-neutral-600 dark:text-white"
                                                            >
                                                                {project.title}
                                                            </CardItem>
                                                            <CardItem
                                                                translateZ="50"
                                                                as="div"
                                                            >
                                                                <Badge className={`
                                                                            ${project.difficulty === "Beginner" ? "bg-green-500" : ""}
                                                                            ${project.difficulty === "Intermediate" ? "bg-yellow-500" : ""}
                                                                            ${project.difficulty === "Advanced" ? "bg-red-500" : ""}
                                                                    `}
                                                                >
                                                                    {project.difficulty}
                                                                </Badge>
                                                            </CardItem>
                                                        </div>

                                                        <CardItem
                                                            as="p"
                                                            translateZ="60"
                                                            className="text-neutral-800 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-300"
                                                        >
                                                            {project.description}
                                                        </CardItem>

                                                        <CardItem
                                                            translateZ="60"
                                                            as="div"
                                                            className="flex flex-wrap gap-2 mb-6"
                                                        >
                                                            {project.tags.map((tag: string) => (
                                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                                            ))}
                                                        </CardItem>
                                                    </div>
                                                    <CardItem
                                                        translateZ="60"
                                                        as="div"
                                                        className="flex gap-3 w-full justify-between"
                                                    >
                                                        <Button variant="outline" className="flex-1" onClick={handleBuildFromScratch}>
                                                            Build from Scratch
                                                        </Button>
                                                        <Button
                                                            variant="default"
                                                            className="flex-1"
                                                            onClick={() => setSelectedProject(project)}
                                                        >
                                                            Start Project
                                                        </Button>
                                                    </CardItem>
                                                </div>
                                            </CardBody>
                                        </CardContainer>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </main>

                <Sheet open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <SheetContent className="w-full md:max-w-[640px] overflow-y-auto">
                        {selectedProject && (
                            <div className="space-y-8">
                                <SheetHeader>
                                    <SheetTitle>{selectedProject.title}</SheetTitle>
                                    <p className="text-black dark:text-gray-200">{selectedProject.guide.description}</p>
                                </SheetHeader>

                                <div className="space-y-6">
                                    {selectedProject.guide.desktopImage && selectedProject.guide.mobileImage && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-gray-200">
                                                    <Monitor className="w-4 h-4" />
                                                    <span>Desktop Preview</span>
                                                </div>
                                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={selectedProject.guide.desktopImage}
                                                        alt="Desktop preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm font-medium text-black dark:text-gray-200">
                                                    <Smartphone className="w-4 h-4" />
                                                    <span>Mobile Preview</span>
                                                </div>
                                                <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden max-w-[240px] mx-auto">
                                                    <Image
                                                        src={selectedProject.guide.mobileImage}
                                                        alt="Mobile preview"
                                                        className="w-full h-full object-cover"
                                                        height={200}
                                                        width={200}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag: string) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Learning Outcomes</h3>
                                        <ul className="list-disc pl-6 space-y-1">
                                            {selectedProject.guide.learningOutcomes.map((outcome) => (
                                                <li key={outcome} className="text-gray-600 dark:text-gray-300">
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    );
};

const CodeWindow = () => {
    return (
        <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center text-gray-400">
                    <Terminal size={14} className="mr-2" />
                    <span className="text-sm">project.tsx</span>
                </div>
            </div>
            <div className="p-4 text-sm font-mono">
                <pre className="text-green-400">
                    <code>{`// E-commerce Dashboard
  function Dashboard() {
    return (
      <div className="grid gap-4">
        <Stats />
        <RevenueChart />
        <ProductList />
      </div>
    )
  }`}</code>
                </pre>
            </div>
        </div>
    );
};
const ProjectStep = ({ number, title }: { number: number; title: string }) => (
    <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
            <span className="text-emerald-500 text-sm font-medium">{number}</span>
        </div>
        <span className="text-gray-300 text-sm">{title}</span>
    </div>
);
const StepsList = () => {
    return (
        <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-gray-200 font-semibold mb-4">Project Steps</h3>
            <div className="space-y-3">
                <ProjectStep number={1} title="Setup project environment" />
                <ProjectStep number={2} title="Build core components" />
                <ProjectStep number={3} title="Add interactivity" />
                <ProjectStep number={4} title="Style with Tailwind CSS" />
                <ProjectStep number={5} title="Deploy to production" />
            </div>
        </div>
    );
};

export default ProjectsPage;