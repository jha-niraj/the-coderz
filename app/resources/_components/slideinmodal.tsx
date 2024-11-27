"use client"

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import CodeBlock from './codeblock';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import SmoothScroll from '@/components/smoothscroll';
import { useToast } from '@/hooks/use-toast';

interface LessonDataProps {
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
interface SlideInModalProps {
    isOpen: boolean;
    onClose: () => void;
    lessonData: LessonDataProps | null;
}

const SlideInModal: React.FC<SlideInModalProps> = ({ isOpen, onClose, lessonData }) => {
    const { toast } = useToast();
    if (!lessonData) return null;

    const highlightBackticks = (text: string) => {
        // Regex to match content between backticks
        const parts = text.split(/(`[^`]+`)/g);

        return parts.map((part, index) =>
            part.startsWith("`") && part.endsWith("`") ? (
                <span key={index} className="font-bold">
                    {part.slice(1, -1)} {/* Remove backticks */}
                </span>
            ) : (
                part
            )
        );
    };

    const handleSolution = () => {
        toast({
            title: "Success",
            description: "We are in the process of making an solution list, if you want you can contribute also",
        });
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="right"
                className="w-full h-full sm:w-[80vw] md:w-[55vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                style={{ maxWidth: '90vw' }}
            >
                <SheetHeader className="pt-4">
                    <SheetTitle>{highlightBackticks(lessonData.title)}</SheetTitle>
                    <SheetDescription>{highlightBackticks(lessonData.description)}</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                    {
                        lessonData?.sections ?
                            (lessonData.sections.map((section, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200"
                                    key={index}
                                >
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-black mb-2">
                                            {index + 1}. { highlightBackticks(section.title) }
                                        </h2>
                                        <p className="text-black mb-6 text-lg">{ highlightBackticks(section.content) }</p>
                                        {
                                            section.points && (
                                                <ul className="list-disc pl-5 text-black">
                                                    {
                                                        section?.points.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            )}
                                        {
                                            section.code && <CodeBlock language="cpp" code={section.code} />

                                        }
                                    </div>
                                </motion.div>
                            ))
                            ) : (
                                <div>We are working on this</div>
                            )
                    }
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-3xl font-bold text-black">Practice Questions 💪</h2>
                            <Link
                                href="#"
                                className="bg-green-400 hover:bg-black text-white font-small p-2 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-lg"
                                onClick={handleSolution}
                            >
                                Solution
                            </Link>
                        </div>

                        <p className="text-gray-700 mb-4 text-lg">
                            Let&apos;s put your new knowledge to the test with some fun exercises. Don&apos;t worry if you get stuck – that&apos;s all part of the learning process!
                        </p>

                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {
                                    lessonData.practiceQuestions ?
                                        (
                                            lessonData.practiceQuestions.map((q, index) => (
                                                <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg">
                                                    <h3 className="text-xl font-semibold text-black mb-3">Question {index + 1}:</h3>
                                                    <p className="text-gray-700 mb-4 text-lg">{q.question}</p>
                                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-r-lg">
                                                        <p className="font-semibold mb-2">Hint:</p>
                                                        <p>{q.hint}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div>We are working on this</div>
                                        )
                                }
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SlideInModal;
