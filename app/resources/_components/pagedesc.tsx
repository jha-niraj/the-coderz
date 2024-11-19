import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ShineBorder from "@/components/ui/shine-border";
import { motion } from "framer-motion";
import Link from "next/link";

interface PageDescriptionProps {
    title: string;
    description: string;
    onClick: () => void;
    isEnrolled: Boolean;
}
export default function PageDescription({ title, description, onClick, isEnrolled }: PageDescriptionProps) {
    return (
        <section>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6 text-center"
            >
                {
                    title
                }
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-lg"
            >
                {
                    description
                }
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid gap-6 grid-cols-1 md:grid-cols-2 rounded-lg p-6 mb-4"
            >
                <ShineBorder
                    className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Important Viva Questions for ETP</CardTitle>
                            <CardDescription>Prepare for your ETP viva with these crucial questions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Access a curated list of frequently asked viva questions for ETP.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href="/etp-viva-questions">View Questions</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </ShineBorder>
                <ShineBorder
                    className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Interview Preparation Questions</CardTitle>
                            <CardDescription>Ace your next interview with our comprehensive question set</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Explore a wide range of interview questions to boost your confidence.</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href="/interview-prep">Prepare Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </ShineBorder>
            </motion.div>
        </section>
    )
}