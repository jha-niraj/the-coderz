"use client"

import { motion } from "framer-motion";
import { ChevronUp, Github, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import twitterLogo from "./homepage/X_logo.jpg";
import Image from "next/image";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-black dark:text-white mx-auto py-4 max-w-2xl md:max-w-3xl lg:max-w-7xl">
            <div className="container mx-auto px-4 mb-2">
                <div className="flex flex-col gap-8 mb-8">
                    <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row sm:justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold">The Coder&apos;z</h3>
                            <p className="">Empowering developers with cutting-edge resources and a supportive community.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/thecoderzhub" target="_blank" className="hover:text-blue-400 transition-colors">
                                <Github className="w-7 h-7" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/the-coder-z-a214b4334/" target="_blank" className="hover:text-blue-400 transition-colors">
                                <Linkedin className="w-7 h-7" />
                            </Link>
                            <Link href="https://www.instagram.com/thecoderzofficial/" target="_blank" className="hover:text-blue-400 transition-colors">
                                <Instagram className="w-7 h-7" />
                            </Link>
                            <Link href="https://x.com/coderzofficial" target="_blank" className="hover:text-blue-400 transition-colors">
                                <Image
                                    src={twitterLogo}
                                    height={30}
                                    width={30}
                                    alt="Twitter Logo"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-4 flex-row">
                    <div className="">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/aboutus" className="hover:text-blue-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-lg text-right font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-right">
                            <li>
                                <Link href="mailto:thecoderzofficial@gmail.com" className="hover:text-blue-400 transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-2 border-t border-gray-700 flex justify-between items-center">
                    <p>&copy; 2024 The Coder&apos;z. All rights reserved.</p>
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;