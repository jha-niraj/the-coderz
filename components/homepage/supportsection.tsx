"use client"

import { useState } from "react";
import { motion } from "framer-motion";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from "../ui/button";
import { Instagram, Linkedin, LinkIcon, Twitter } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";
import ShineBorder from "../ui/shine-border";
import { RainbowButton } from "../ui/rainbow-button";

const SupportSection = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleShare = (platform: string) => {
        const tweetText = encodeURIComponent("Hello guys, I have been using this platform for 1 month and I have found this very helpful. Visit this platform for all the resources related to computer science and follow their Instagram and newsletter to remain updated every day.");
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=https://www.thecoderz.tech`;

        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=Support Our Mission&summary=Help us empower more developers by sharing our platform. Together, we can build a stronger coding community.`;
        const instagramUrl = "https://www.instagram.com/thecoderzofficial/";

        if (platform === 'Twitter') {
            window.open(tweetUrl, '_blank');
        } else if (platform === 'LinkedIn') {
            window.open(linkedInUrl, '_blank');
        } else if (platform === "Instagram") {
            window.open(instagramUrl, '_blank');
        } else {
            console.log(`Please share this to ${platform}`);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText("https://www.thecoderz.tech");
        toast.success("Website URL copied")
    };

    return (
        <section className="text-black dark:text-white mx-auto rounded-2xl py-16">
            <Toaster />
            <ShineBorder
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <motion.section
                    className="rounded-lg py-8 flex items-center justify-center flex-col w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="container mx-auto px-4">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            Support Our Learning Community
                        </motion.h2>
                        <motion.p
                            className="text-center text-lg mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            Help us grow by sharing this website with your friends and colleagues!
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-auto flex justify-center w-full"
                    >
                        <RainbowButton onClick={() => setIsDialogOpen(c => !c)}>
                            Support Us
                        </RainbowButton>
                    </motion.div>
                </motion.section>
            </ShineBorder>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share our platform</DialogTitle>
                        <DialogDescription>
                            Help us grow by sharing our platform on your favorite social media.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center space-x-4 my-4">
                        {[
                            { icon: Linkedin, name: 'LinkedIn' },
                            { icon: Instagram, name: "Instagram" },
                            { icon: Twitter, name: 'Twitter' },
                        ].map((platform, index) => (
                            <motion.button
                                key={index}
                                className="p-2 rounded-full transition-colors duration-300"
                                onClick={() => handleShare(platform.name)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <platform.icon className="w-6 h-6" />
                            </motion.button>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <Button onClick={copyLink} className="flex items-center space-x-2">
                            <LinkIcon className="w-4 h-4" />
                            <span>Copy Link</span>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default SupportSection;