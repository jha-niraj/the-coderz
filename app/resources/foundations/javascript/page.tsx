"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizAndContribute from '../../_components/quizcontribute';
import UnitAccordion from '../../_components/unitaccordian';
import PageDescription from '../../_components/pagedesc';
import BottomCodingQuestion from '../../_components/bottomcoding';
// import { lessonData, units } from '../../data/javascript';
import ShineBorder from '@/components/ui/shine-border';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { QuestionProps, SubjectProps } from '@/app/types';
import { toast } from '@/hooks/use-toast';

const pageDescription = {
    title: "JavaScript Learning Path",
    description: "Master JavaScript with our comprehensive course covering everything from basics to advanced topics Perfect for beginners and experienced programmers looking to enhance their skills."
}
const vivaQuestionsDesc = {
    title: "React Viva Questions",
    description: "Please try to answer the question from your side and then see the answer. For that we have used the Accrodian here."
}
const interviewQuestionsDesc = {
    title: "React Interview Questions",
    description: "Please try to answer the question from your side and then see the answer. For that we have used the Accrodian here."
}
const JavaScriptResourcePage = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subject, setSubject] = useState<SubjectProps | null>(null);
    const [selectedSet, setSelectedSet] = useState<QuestionProps[] | null>(null);

    const handleVivaQuestions = () => {
        // setSubject(vivaQuestionsDesc)
        // setSelectedSet(vivaQuestions);
        // setIsModalOpen(true);

        toast({
            title: "Coming Soon",
        });
    }
    const handleInterviewQuestions = () => {
        // setSubject(interviewQuestionsDesc)
        // setSelectedSet(interviewQuestions);
        // setIsModalOpen(true);

        toast({
            title: "Coming Soon",
        });
    }

    return (
        <div className="min-h-screen overflow-hidden w-full py-32 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-4xl mx-auto">
                <PageDescription title={pageDescription.title} description={pageDescription.description} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 rounded-lg p-3 sm:p-6 mb-4"
                >
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <Card>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <CardHeader>
                                        <CardTitle>Important Viva Questions for ETP</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Prepare for your ETP viva with these crucial questions. Access a curated list of frequently asked viva questions for ETP.</p>
                                    </CardContent>
                                </div>
                                <Button onClick={handleVivaQuestions}>
                                    View Questions
                                </Button>
                            </div>
                        </Card>
                    </ShineBorder>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <Card>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <CardHeader>
                                        <CardTitle>Interview Preparation Questions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Ace your next interview with our comprehensive question set. Explore a wide range of interview questions to boost your confidence.</p>
                                    </CardContent>
                                </div>
                                <Button onClick={handleInterviewQuestions}>
                                    Prepare Now
                                </Button>
                            </div>
                        </Card>
                    </ShineBorder>
                </motion.div>
                {/* {
                    units.map((unit, index) => (
                        <UnitAccordion key={index} unit={unit} unitIndex={index} lessonData={lessonData} />
                    ))
                } */}
                <BottomCodingQuestion />
            </div>
        </div>
    );
};

export default JavaScriptResourcePage;