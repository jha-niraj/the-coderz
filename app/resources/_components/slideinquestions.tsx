import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import CodeBlock from "./codeblock";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface QuestionsProps {
    id: string;
    question: string;
    description: string;
    points?: string[];
    code?: string | null;
}
interface SlideInQuestionsProps {
    isOpen: boolean;
    onClose: () => void;
    subject: {
        title: string;
        description: string;
    } | null;
    questionsData: QuestionsProps[] | null;
}
const SlideInQuestions: React.FC<SlideInQuestionsProps> = ({ isOpen, onClose, subject, questionsData }) => {
    const bgColors = {
        primary: "bg-sky-50",           // Very light sky blue for main background
        secondary: "bg-sky-100",         // Slightly deeper sky blue
        accent: "bg-sky-200",            // Light accent background
    }
    const textColors = {
        primary: "text-sky-900",         // Dark blue-gray for primary text
        secondary: "text-sky-700",        // Medium blue for secondary text
        muted: "text-sky-600",            // Lighter blue for less important text
        accent: "text-sky-500",           // Bright blue for highlights
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="right"
                className="w-full h-full sm:w-[80vw] md:w-[55vw] sm:max-w-[80vw] p-6 overflow-y-auto bg-white"
                style={{ maxWidth: '90vw' }}
            >
                <SheetHeader className="pt-4 mb-8 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-2 text-center text-gray-800"
                    >
                        {subject && subject.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-lg text-gray-600"
                    >
                        {subject && subject.description}
                    </motion.p>
                </SheetHeader>
                <div className="mt-6 mb-6 space-y-4">
                    <Accordion
                        type="multiple"
                        className="gap-4 rounded-2xl space-y-3 shadow-sm"
                    >
                        {
                            questionsData && questionsData.map((data, index: number) => (
                                <AccordionItem
                                    key={index}
                                    value={data.id}
                                    className="border border-gray-200 rounded-xl"
                                >
                                    <AccordionTrigger
                                        className={`
                                            ${textColors.primary} 
                                            text-left px-6 py-4 font-semibold text-lg text-gray-800 flex items-center
                                            hover:${textColors.accent}
                                        `}
                                    >
                                        <div className="flex items-center w-full">
                                            <span className="mr-4 text-gray-500 font-normal text-base">
                                                Q{index + 1}.
                                            </span>
                                            <div className="flex-grow">
                                                {data.question}
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className={`
                                            ${bgColors.accent} 
                                            ${textColors.secondary}
                                            px-6 py-4 bg-gray-50 rounded-b-xl text-gray-700 space-y-3 text-md leading-relaxed
                                        `}
                                    >
                                        <div className="border-l-4 border-blue-500 pl-4 mb-3 text-gray-800">
                                            {data.description}
                                        </div>
                                        {
                                            data.points && (
                                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                                    {
                                                        data.points.map((item, pointIndex) => (
                                                            <li
                                                                key={`${data.id}-${pointIndex}`}
                                                                className="text-md text-gray-600"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                        {
                                            data.code && (
                                                <div className="mt-4">
                                                    <CodeBlock
                                                        key={data.id}
                                                        language="cpp"
                                                        code={data.code}
                                                    />
                                                </div>
                                            )
                                        }
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
                <Link
                    target='_blank'
                    href="https://discord.gg/chF78trF"
                    className="w-[70%]"
                >
                    <RainbowButton>Join Discord</RainbowButton>
                </Link>
            </SheetContent>
        </Sheet>
    )
}

export default SlideInQuestions;