"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, FileText, Youtube, YoutubeIcon } from 'lucide-react';
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SlideInModal from "./slideinmodal";
import QuizAndContribute from "./quizcontribute";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface Lesson {
    title: string;
    description: string;
    sections: {
        title: string;
        content: string;
        points?: string[];
        code?: string;
    }[];
    practiceQuestions: {
        question: string;
        hint: string;
    }[];
    nextChapter: string;
}

interface UnitLessonProps {
    name: string;
    lessonkey: string;
}
interface UnitAccordianSecondProps {
    title: string;
    youtube: string;
    quizlink: string;
    lessons: UnitLessonProps[];
}

interface UnitAccordionProps {
    unit: UnitAccordianSecondProps;
    unitIndex: number;
    lessonData: { [key: string]: any };
}

const UnitAccordion: React.FC<UnitAccordionProps> = ({ unit, unitIndex, lessonData }) => {
    const [expanded, setExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const { toast } = useToast();

    // Effect to handle scroll lock
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup when the component unmounts or modal closes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModalOpen]);

    const handleLessonClick = (lesson: UnitLessonProps) => {
        const lessonKey = lesson.lessonkey;
        const detailedLessonData = lessonData[lessonKey];
        setSelectedLesson({ ...lesson, ...detailedLessonData });
        setIsModalOpen(true);
    };
    const handleQuizSelection = () => {
        toast({
            title: "Success",
            description: "We are creating an extensive list of quiz that will help you grasp the knowledge of the current topic. It will be available soon.",
        });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: unitIndex * 0.1 }}
            className="w-full mt-2 overflow-hidden"
        >
            <div className="p-3">
                <div className="mx-auto max-w-4xl">
                    <div className="">
                        <Card className="w-full transition-shadow hover:shadow-lg">
                            <CardHeader className="">
                                <div className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                                    <div>
                                        <CardTitle className="text-xl text-center sm:text-left font-medium text-primary">{unit.title}</CardTitle>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
                                        <Badge variant="secondary" className="text-sm">
                                            <BookOpen className="mr-1 h-4 w-4" />
                                            {unit.lessons.length} lessons
                                        </Badge>
                                        <Link href={unit.youtube} target="_blank">
                                            <Button variant="outline" size="sm">
                                                <Youtube className="mr-2 h-4 w-4" />
                                                Video
                                            </Button>
                                        </Link>
                                        <Link href="#" className="w-full flex items-center justify-end sm:w-auto">
                                            <Button variant="outline" size="sm">
                                                <FileText className="mr-2 h-4 w-4" />
                                                Quiz
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="lessons">
                                        <AccordionTrigger className="text-lg font-semibold">
                                            Course Content
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="rounded-md border bg-background">
                                                {
                                                    unit.lessons.map((lesson, lessonIndex) => (
                                                        <div
                                                            key={lesson.lessonkey}
                                                            className="flex items-center justify-between cursor-pointer p-4 hover:bg-accent hover:text-accent-foreground"
                                                            onClick={() => handleLessonClick(lesson)}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Badge variant="outline" className="h-8 w-8 rounded-full shrink-0">
                                                                    {lessonIndex + 1}
                                                                </Badge>
                                                                <span className="text-sm text-black dark:text-white font-medium">{lesson.name}</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <SlideInModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lessonData={selectedLesson}
            />
        </motion.div>
    );
};

export default UnitAccordion;