'use client'

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Code, Database, Globe, Shield, Cpu, Lightbulb, Rocket, Target, Zap, Sparkles, LucideIcon, Briefcase, Award, TrendingUp, GraduationCap, ChevronRight, BookOpen, ShieldCheck, MessageSquare } from 'lucide-react';
import { pathwaysData } from './pathwaysdata';
import { motion, useAnimation } from "framer-motion";
import ShimmerButton from '@/components/ui/shimmer-button';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { useSession } from 'next-auth/react';

const benefits = [
    { title: 'Structured Learning', description: 'Follow a curated path designed by industry experts', icon: <Target className="w-6 h-6" /> },
    { title: 'Hands-on Experience', description: 'Build real-world projects to apply your skills', icon: <Cpu className="w-6 h-6" /> },
    { title: 'Career Guidance', description: 'Get insights into various tech career opportunities', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Community Support', description: 'Connect with peers and mentors in your chosen field', icon: <Globe className="w-6 h-6" /> },
    { title: 'Flexible Learning', description: 'Learn at your own pace with on-demand resources', icon: <Rocket className="w-6 h-6" /> },
    { title: 'Industry-Aligned', description: 'Stay updated with the latest trends and technologies', icon: <Zap className="w-6 h-6" /> },
]
const techPaths = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Cloud Computing",
    "DevOps Engineering",
    "Mobile Development",
    "UI/UX Design",
    "Data Science",
    "Machine Learning",
    "Blockchain Development"
];

interface PathwayProps {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    color: string;
    niche: string;
    domain: string;
    careers: {
        title: string;
        description: string;
        skills: string;
        opportunities: string;
    }[];
    challenges: {
        title: string;
        description: string;
        opportunity: string;
    }[];
    skills: {
        name: string;
        description: string;
    }[];
    trends: {
        name: string;
        description: string;
    }[];
    learningPath: {
        name: string;
        duration: string;
        description: string;
        link: string;
    }[];
    certifications: {
        title: string;
        description: string;
        domains: string[];
        duration: string;
        recommendedTraining: {
            title: string;
            link: string;
        }[];
    }[];
    advices: {
        title: string;
        description: string;
    }[]
}

export default function Component() {
    const [selectedPathway, setSelectedPathway] = useState<PathwayProps | null>(null);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session?.user) {
            router.push("/signin");
        }
    }, [router, session?.user])

    const handleCardClick = (pathway: PathwayProps) => {
        setSelectedPathway(pathway);
    };
    const handleResourcesClick = (pathwayId: string) => {
        router.push(`/resources/${pathwayId}`);
    };

    return (
        <div className="max-w-7xl mx-auto min-h-screen pt-28 sm:pt-40">
            <div className="absolute inset-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        The fastest way to become a
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                            tech professional
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black dark:text-white max-w-3xl mx-auto">
                        Find your perfect learning pathway and join thousands of developers building the future of technology
                    </p>
                    <div className="">
                        <div className="relative flex overflow-x-hidden">
                            <div className="animate-marquee whitespace-nowrap py-6 flex gap-8">
                                {[...techPaths, ...techPaths].map((path, index) => (
                                    <div key={index} className="z-10 flex min-h-32 items-center justify-center">
                                        <ShimmerButton className="shadow-2xl">
                                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                                {
                                                    path
                                                }
                                            </span>
                                        </ShimmerButton>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-7xl mx-auto">
                        {[
                            { label: "Active Learners", value: "10,000+" },
                            { label: "Success Rate", value: "94%" },
                            { label: "Career Transitions", value: "2,000+" },
                            { label: "Learning Paths", value: "25+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center shadow-2xl rounded-2xl dark:border-2 p-4">
                                <div className="text-3xl font-bold text-black dark:text-white mb-2 whitespace-nowrap">
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pathways?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            benefits.map((benefit, index) => (
                                <Card key={index} className="shadow-2xl dark:border-2 rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-center">
                                            <div className="mr-4 p-2 bg-blue-100 rounded-full text-blue-600">
                                                {benefit.icon}
                                            </div>
                                            <p className="text-center">
                                                {benefit.title}
                                            </p>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-center text-black dark:text-white">{benefit.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Pathways Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-medium text-center mb-12">Explore Our Pathways on diffrent domains</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            pathwaysData.map((pathway) => (
                                <CardContainer
                                    className="inter-var w-full cursor-pointer"
                                    key={pathway.id}
                                >
                                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] h-[300px] sm:h-[270px] border-black/[0.1] w-full rounded-xl p-4 border">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="h-full">
                                                <div className="flex flex-col items-start gap-4 justify-between mb-4">
                                                    <CardItem
                                                        translateZ="50"
                                                        className="text-xl font-semibold text-neutral-600 dark:text-white flex gap-2 items-center justify-center"
                                                    >
                                                        <div className={`mr-4 p-2 rounded-full bg-gradient-to-r ${pathway.color} text-white`}>
                                                            {pathway.icon}
                                                        </div>
                                                        <h1>
                                                            {pathway.title}
                                                        </h1>
                                                    </CardItem>
                                                    <CardItem className="">
                                                        {pathway.description}
                                                    </CardItem>
                                                </div>

                                            </div>
                                            <CardItem
                                                translateZ="60"
                                                as="div"
                                                className="flex flex-col gap-4 w-full justify-between"
                                            >
                                                <CardItem className="w-full">
                                                    <div className="flex gap-2 items-center justify-center">
                                                        <Badge variant="secondary" className='text-center'>{pathway.niche}</Badge>
                                                        <Badge variant="outline" className='text-center'>{pathway.domain}</Badge>
                                                    </div>
                                                </CardItem>
                                                <Button
                                                    variant="default"
                                                    className="flex-1"
                                                    onClick={() => handleCardClick(pathway)}
                                                >
                                                    Explore Pathway
                                                </Button>
                                            </CardItem>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Sheet to show the Pathway Data */}
            <Sheet open={!!selectedPathway} onOpenChange={() => setSelectedPathway(null)}>
                <SheetContent side="right" className="w-full p-0 md:max-w-[840px]">
                    {selectedPathway && (
                        <ScrollArea className="h-full">
                            <div className="p-6">
                                <SheetHeader className="mb-6">
                                    <div className={`p-4 rounded-lg bg-gradient-${selectedPathway.color} mb-4`}>
                                        <SheetTitle className="text-2xl text-black dark:text-white mb-2">
                                            {selectedPathway.title}
                                        </SheetTitle>
                                        <SheetDescription className="text-black dark:text-gray-200">
                                            {selectedPathway.description}
                                        </SheetDescription>
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <Badge variant="secondary">{selectedPathway.niche}</Badge>
                                        <Badge variant="secondary">{selectedPathway.domain}</Badge>
                                    </div>
                                </SheetHeader>
                                <div className="space-y-8 w-full">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Briefcase className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Career Paths</h3>
                                        </div>
                                        {
                                            selectedPathway.careers.map((career, index) => (
                                                <Card key={index} className="p-4">
                                                    <h4 className="font-semibold text-lg mb-2">{index + 1} . {career.title}</h4>
                                                    <p className="text-black dark:text-gray-200 mb-3">{career.description}</p>
                                                    <div className="grid gap-2">
                                                        <div>
                                                            <span className="font-bold">Skills: </span>{career.skills}
                                                        </div>
                                                        <div>
                                                            <span className="font-bold">Opportunities: </span>{career.opportunities}
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))
                                        }
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Lightbulb className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Challenges & Opportunities</h3>
                                        </div>
                                        {
                                            selectedPathway.challenges.map((challenge, index) => (
                                                <Card key={index} className="p-4">
                                                    <h4 className="font-semibold text-lg mb-2">{index + 1} . {challenge.title}</h4>
                                                    <p className="text-black dark:text-gray-200 mb-3">{challenge.description}</p>
                                                    <div>
                                                        <span className="font-bold">Opportunity: </span>{challenge.opportunity}
                                                    </div>
                                                </Card>
                                            ))
                                        }
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <Award className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Key Skills</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {
                                                selectedPathway.skills.map((skill, index) => (
                                                    <Card key={index} className="p-4">
                                                        <h4 className="font-semibold mb-2">{index + 1} . {skill.name}</h4>
                                                        <p className="text-sm text-black dark:text-gray-200">{skill.description}</p>
                                                    </Card>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <TrendingUp className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Industry Trends</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {
                                                selectedPathway.trends.map((trend, index) => (
                                                    <Card key={index} className="p-4">
                                                        <h4 className="font-semibold mb-2">{index + 1} . {trend.name}</h4>
                                                        <p className="text-sm text-black dark:text-gray-200">{trend.description}</p>
                                                    </Card>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <BookOpen className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Learning Path</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {
                                                selectedPathway.learningPath.map((step, index) => (
                                                    <Card key={index} className="p-4 flex flex-col justify-between gap-4">
                                                        <div>
                                                            <h4 className="font-semibold mb-2">{index + 1} . {step.name}</h4>
                                                            <p className="text-sm text-black dark:text-gray-100 mb-2">{step.description}</p>
                                                            <div>
                                                                <span className="font-medium">Duration: </span>{step.duration}
                                                            </div>
                                                        </div>
                                                        <Link 
                                                            href={step.link}
                                                            target='_blank'
                                                            className="bg-green-600 p-2 rounded-2xl text-center"
                                                        >
                                                            Explore Path
                                                        </Link>
                                                    </Card>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <ShieldCheck className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Certifications</h3>
                                        </div>
                                        {
                                            selectedPathway.certifications.map((cert, index) => (
                                                <Card key={index} className="p-4">
                                                    <h4 className="font-semibold text-lg mb-2">{index + 1} . {cert.title}</h4>
                                                    <p className="text-black dark:text-gray-200 mb-2">{cert.description}</p>
                                                    <div>
                                                        <span className="font-bold">Domains: </span>{cert.domains.join(', ')}
                                                    </div>
                                                    <div>
                                                        <span className="font-bold">Duration: </span>{cert.duration}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-4">Recommended Training:</h4>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            {
                                                                cert.recommendedTraining.map((training, index) => {
                                                                    return (
                                                                        <Link
                                                                            href={training.link}
                                                                            key={index}
                                                                            className="bg-green-700 text-white p-1 text-center rounded-2xl"
                                                                            target='_blank'
                                                                        >
                                                                            {
                                                                                training.title
                                                                            }
                                                                        </Link>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))
                                        }
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <MessageSquare className="w-5 h-5" />
                                            <h3 className="font-semibold text-lg">Advice from our side</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2">
                                            {
                                                selectedPathway.advices.map((advice, index) => (
                                                    <Card key={index} className="p-4">
                                                        <h4 className="font-bold text-lg mb-2">{index + 1} . {advice.title}</h4>
                                                        <p className="text-black dark:text-gray-200">{advice.description}</p>
                                                    </Card>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Separator />
                                    <Link
                                        target='_blank'
                                        href="https://discord.gg/chF78trF"
                                        className="flex items-center justify-center"
                                    >
                                        <RainbowButton>Join Discord</RainbowButton>
                                    </Link>
                                </div>
                            </div>
                        </ScrollArea>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    )
}
