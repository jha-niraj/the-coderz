import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, ExternalLink, Github, MoreVertical } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ShinyButton from "@/components/ui/shiny-button";

interface ProjectCardProps {
    title: string;
    description: string;
    status: string;
    isSubmittable: boolean;
    githubLink: string;
    liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    status,
    isSubmittable,
    githubLink,
    liveLink
}) => {

    return (
        <Card className="overflow-hidden transition-all rounded-2xl dark:border-2 duration-300 p-4 shadow-md hover:shadow-2xl">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                    </div>
                    <Badge>{status}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="mt-2 mb-4 text-sm text-muted-foreground">{description}</CardDescription>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-muted-foreground hover:text-foreground flex gap-2 items-center justify-center transition-colors duration-200 ${!isSubmittable && 'pointer-events-none opacity-50'}`}
                        >
                            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition duration-200">
                                <Github className="w-5 h-5" />Github
                            </button>
                        </Link>
                        <Link
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-muted-foreground hover:text-foreground flex gap-2 items-center justify-center transition-colors duration-200 ${!isSubmittable && 'pointer-events-none opacity-50'}`}
                        >
                            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] transition duration-200">
                                <ExternalLink className="w-5 h-5" />View Live
                            </button>
                        </Link>
                    </div>
                    {
                        isSubmittable && (
                            <Dialog>
                                <DialogTrigger asChild>
                                    <ShinyButton>Submit Project</ShinyButton>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Submit your Project</DialogTitle>
                                        <DialogDescription>
                                            Proceed to submit your project. Please make sure you have followed all the instruction as this is your last checkpoint.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="github" className="text-right">
                                                Github
                                            </Label>
                                            <Input id="github" placeholder="https://github.com/jha-niraj" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="livelink" className="text-right">
                                                Live Link
                                            </Label>
                                            <Input id="livelink" placeholder="Vercel/Netlify or any other link" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Submit Project</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;