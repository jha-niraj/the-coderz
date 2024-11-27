"use client"

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

// FAQ data
const faqData = [
    {
        id: "item-1",
        question: "How do I start learning a programming language on The Coder'z?",
        answer: "To get started, simply create an account, choose a language you want to learn, and explore our resources. We offer beginner-friendly content for C, C++, Java, Python, and more. You can start with foundational topics and progress to advanced materials."
    },
    {
        id: "item-2",
        question: "Are the resources on The Coder'z suitable for beginners?",
        answer: "Yes! Our resources are designed to cater to all levels, from beginners to advanced learners. For each language, we provide structured content with easy-to-follow explanations, practical examples, and exercises to reinforce your learning."
    },
    {
        id: "item-3",
        question: "Do I get a certificate after completing a course?",
        answer: "Currently, we do not offer certificates for completing individual lessons or resources. However, you can track your progress and gain skills that are highly valuable in the industry. We’re working on integrating certifications in the future."
    },
    {
        id: "item-4",
        question: "Can I ask questions or get help if I am stuck?",
        answer: "Yes, you can reach out to our support team or community forums for help. Additionally, we offer occasional live Q&A sessions and are planning a mentorship program to help learners with personalized guidance."
    },
    {
        id: "item-5",
        question: "Is there a way to practice coding on The Coder'z?",
        answer: "Absolutely! Many of our lessons include coding exercises you can complete directly on the platform. We also provide project-based exercises to help you apply what you’ve learned to real-world scenarios."
    },
    {
        id: "item-6",
        question: "How often are new resources or courses added?",
        answer: "We frequently update and expand our content based on industry trends and user feedback. New courses, languages, and topics are added regularly, so check back often for the latest resources."
    },
    {
        id: "item-7",
        question: "Do I need any prior experience to start learning on The Coder'z?",
        answer: "No prior experience is needed! We offer beginner-friendly tutorials and step-by-step guides for every programming language. If you're new to coding, you can start with our foundational courses and work your way up."
    },
    {
        id: "item-8",
        question: "Are there any costs associated with using The Coder'z?",
        answer: "The Coder'z offers many free resources, and we also have premium content available for those looking for in-depth tutorials, hands-on projects, and mentorship opportunities. You can explore our pricing options on our site."
    },
    {
        id: "item-9",
        question: "Can I access The Coder'z on mobile devices?",
        answer: "Yes, The Coder'z is accessible on mobile devices, so you can learn on the go. The website is optimized for mobile, allowing you to access resources, watch tutorials, and even participate in coding exercises from your smartphone or tablet."
    },
];

const FaqsAccrodian = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full mx-auto mt-20 mb-16"
        >
            <div className="flex flex-col lg:flex-row gap-10 w-full justify-around">
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <Badge className="w-12">FAQ</Badge>
                    <h1 className="font-medium text-4xl">What would you like to know about Coder&apos;z?</h1>
                    <Link href="mailto:thecoderzofficial@gmail.com">
                        <Button className="flex gap-2"><MessageCircle /> Talk to us</Button>
                    </Link>
                </div>
                <div className="w-full lg:w-2/3">
                    <Accordion type="multiple" className="gap-3 rounded-lg flex flex-col">
                        {
                            faqData.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="rounded-lg">
                                    <AccordionTrigger className="text-left px-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </motion.div>
    );
};

export default FaqsAccrodian;
