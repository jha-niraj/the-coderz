"use client"

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spotlight } from "../ui/spotlight";
import SparklesText from "../ui/sparkles-text";

const MainPage = () => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative min-h-[60vh] flex items-center"
        >
            <Spotlight
                className="-top-80 left-0 md:left-30"
                fill="blue"
            />
            <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02]" />

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col items-center justify-center w-full gap-8">
                        <div className="mx-auto w-full flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center gap-2 mb-3"
                            >
                                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-sm font-medium text-blue-600 dark:text-blue-400">
                                    Welcome to Your Learning Journey
                                </span>
                            </motion.div>

                            <div className="mx-auto w-full flex flex-col gap-1">
                                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                                    Your One Stop Platform for
                                </span>
                                <SparklesText text="Knowledge and Support" />
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center justify-center">
                            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
                                Join our vibrant community of learners and gain access to a vast library of resources,
                                expert guidance, and collaborative support. 
                                {/* Unlock your full potential and achieve your goals with confidence. */}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mt-4">
                                <button
                                    onClick={() => router.push("/resources")}
                                    className="bg-slate-800 dark:bg-white no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block"
                                >
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-full dark:bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                                        <span>View all Resources</span>
                                        <svg
                                            fill="none"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                </button>

                                <button
                                    onClick={() => router.push("/communities")}
                                    className="text-sm font-semibold text-gray-900 dark:text-white bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-gray-800 px-6 py-2 rounded-full transition-all duration-300"
                                >
                                    Join Community
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MainPage;