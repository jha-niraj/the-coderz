"use client";

import { MapPin, Building2, Edit, Plus, Twitter, Instagram, MoreVertical, Github, Linkedin, Code, X, Mail, Award, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import SmoothScroll from "@/components/smoothscroll";
import Image from "next/image";
import userprofileImage from "./images/cartoon_type_user.jpeg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import axios from "axios";
import { userData } from "@/actions/user.action";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import twitterLogo from "@/components/homepage/X_logo.jpg";

const technicalSkills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript", "Angular", "Vue.js", "Java", "C++", "Ruby", "PHP", "Swift",
    "Kotlin", "Go", "Rust", "SQL", "MongoDB", "GraphQL", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "TensorFlow",
    "PyTorch", "Scikit-learn", "Pandas", "NumPy", "R", "Tableau", "Power BI", "Git", "Jenkins", "Travis CI", "CircleCI"
];
const interestsSelection = [
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "Mobile Development",
    "DevOps",
    "Cloud Computing",
    "Database Management",
    "UI/UX Design",
    "System Architecture",
    "API Development",
    "Cybersecurity",
    "Machine Learning",
    "Blockchain",
    "Quality Assurance"
];

// Types and Interface for the Profile Page each section:
interface PublicDataProps {
    tagline: string;
    college: string;
    location: string;
    github: string;
    linkedin: string;
    twitter: string;
    leetcode: string;
    website: string;
}
interface PrivateDataProps {
    gender: string;
    phone: string;
    yearOfBirth: string;
}
interface ProofOfWorkProps {
    description: string;
    skills: string[];
    link: string;
}

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session?.user) {
            router.push("/signin");
        }
    }, [router, session?.user])

    // Data Stores for all the fields
    const [publicDataOpen, setPublicDataOpen] = useState<boolean>(false);
    const [publicData, setPublicData] = useState<PublicDataProps>({
        tagline: '',
        college: '',
        location: '',
        github: '',
        linkedin: '',
        twitter: '',
        leetcode: '',
        website: ''
    });
    const [tempPublicData, setTempPublicData] = useState<PublicDataProps>({ ...publicData });
    const [privateDataOpen, setPrivateDataOpen] = useState<boolean>(false);
    const [privateData, setPrivateData] = useState<PrivateDataProps>({
        gender: '',
        phone: '',
        yearOfBirth: '',
    });
    const [tempPrivateData, setTempPrivateData] = useState<PrivateDataProps>({ ...privateData });
    const [aboutMeOpen, setAboutMeOpen] = useState<boolean>(false);
    const [aboutme, setAboutMe] = useState<string>("");
    const [tempAboutMe, setTempAboutMe] = useState<string>("");
    const [interestsOpen, setInterestsOpen] = useState<boolean>(false);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [tempSelectedInterests, setTempSelectedInterests] = useState<string[]>([]);
    const [skillOpen, setSkillOpen] = useState<boolean>(false);
    const [currentSkill, setCurrentSkill] = useState<string>("");
    const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
    const [tempSkills, setTempSkills] = useState<string[]>([]);
    const [powOpen, setPoWOpen] = useState<boolean>(false);
    const [proofOfWork, setProofOfWork] = useState<ProofOfWorkProps[]>([]);
    const [tempProofOfWork, setTempProofOfWork] = useState<ProofOfWorkProps[]>([]);
    const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

    useEffect(() => {
        const fetchedUserData = async () => {
            try {
                const response = await axios.get("/api/profile");
                const userData = response.data.data;
                setPublicData({
                    tagline: userData.tagline || '',
                    college: userData.college || '',
                    location: userData.location || '',
                    github: userData.github || '',
                    linkedin: userData.linkedin || '',
                    twitter: userData.twitter || '',
                    leetcode: userData.leetcode || '',
                    website: userData.website || ''
                })
                setPrivateData({
                    gender: userData.gender,
                    phone: userData.phone,
                    yearOfBirth: userData.yearofbirth
                })
                setAboutMe(userData.aboutme || '');
                setSelectedInterests(userData.interests);
                setSelectedSkill(userData.skills);
                setProofOfWork(userData.proofofwork);
            } catch (err: any) {
                console.error('Error fetching user data:', err);
                toast({
                    title: "Error",
                    description: "Failed to fetch user information",
                    variant: "destructive",
                });
            }
        }

        fetchedUserData();
    }, [toast])

    const SocialButton = ({ href, icon: Icon }: { href: string | null | undefined, icon: React.ElementType }) => (
        href ? (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline">
                    <Icon className="h-4 w-4" />
                </Button>
            </Link>
        ) : (
            <Button size="icon" variant="outline" disabled>
                <Icon className="h-4 w-4" />
            </Button>
        )
    );

    // Input Change function for all sections:
    const handlePublicDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTempPublicData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handlePrivateDataChange = (name: string, value: string) => {
        setTempPrivateData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        // Only allow numbers and limit to reasonable phone number length
        const sanitizedValue = value.replace(/\D/g, '').slice(0, 15);
        handlePrivateDataChange('phone', sanitizedValue);
    };
    const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempAboutMe(e.target.value);
    };
    const handleInterestChange = (interest: string) => {
        setTempSelectedInterests((current: string[]) => {
            if (current.includes(interest)) {
                return current.filter((item) => item !== interest);
            }
            return [...current, interest];
        });
    };
    const handleAddSkill = (value: string) => {
        if (value && !tempSkills.includes(value)) {
            setTempSkills([...tempSkills, value]);
        }
        setCurrentSkill("");
    };
    const handleProofOfWorkChange = (index: number, field: keyof ProofOfWorkProps, value: string) => {
        const updatedPow = [...tempProofOfWork];
        updatedPow[index] = {
            ...updatedPow[index],
            [field]: value
        };
        setTempProofOfWork(updatedPow);
    };

    // Function to execute when the user click on the edit button on any section:
    const handlePublicEditClick = () => {
        setTempPublicData(publicData);
        setPublicDataOpen(true);
    }
    const handlePrivateEditClick = () => {
        setPrivateData(privateData);
        setPrivateDataOpen(true);
    }
    const handleAboutMeEditClick = () => {
        setTempAboutMe(aboutme);
        setAboutMeOpen(true);
    };
    const handleInterestsEditClick = () => {
        setTempSelectedInterests([...selectedInterests]);
        setInterestsOpen(true);
    };
    const handleSkillEditClick = () => {
        setTempSkills([...selectedSkill]);
        setCurrentSkill("");
        setSkillOpen(true);
    };
    const handlePoWEditClick = () => {
        setIsAddingNew(false);
        setTempProofOfWork([...proofOfWork]);
        setPoWOpen(true);
    };
    const handleAddNewPoWClick = () => {
        setIsAddingNew(true);
        setTempProofOfWork([{
            description: '',
            skills: [],
            link: ''
        }]);
        setPoWOpen(true);
    };

    // Function to submit the data to the server:
    const handlePublicDataSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post("/api/publicdata", tempPublicData);
            if (!response) {
                console.log(response);
                return;
            }
            setPublicData({
                tagline: response.data.data.tagline,
                college: response.data.data.college,
                location: response.data.data.location,
                github: response.data.data.github,
                linkedin: response.data.data.linkedin,
                twitter: response.data.data.twitter,
                leetcode: response.data.data.leetcode,
                website: response.data.data.website
            });
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setPublicDataOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handlePrivateDataSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post("/api/privatedata", tempPrivateData);
            if (!response) {
                console.log(response);
                return;
            }
            setPrivateData({
                gender: response.data.data.gender,
                phone: response.data.data.phone,
                yearOfBirth: response.data.data.yearofbirth
            });
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setPrivateDataOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleAboutMeSubmit = async () => {
        try {
            setIsSubmitting(true);
            const response = await axios.post("/api/aboutme", {
                tempAboutMe
            });
            if (!response) {
                console.log(response);
                return;
            }
            console.log(response);
            setAboutMe(response.data.aboutme);
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setAboutMeOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    const handleInterestsSubmit = async () => {
        try {
            setIsSubmitting(true);
            const response = await axios.post("/api/interests", {
                interests: tempSelectedInterests
            });
            if (!response) {
                console.log(response);
                return;
            }
            console.log(response);
            setSelectedInterests(response.data.interests);
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setInterestsOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update interests",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleSkillSubmit = async () => {
        try {
            setIsSubmitting(true);
            const response = await axios.post("/api/skills", {
                skills: tempSkills
            });
            if (!response) {
                console.log(response);
                return;
            }
            console.log(response);
            setSelectedSkill(response.data.skills);
            toast({
                title: "Success",
                description: response.data.msg,
            });
            setSkillOpen(false);
        } catch (err: any) {
            toast({
                title: "Error",
                description: "Failed to update interests",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    const handlePoWSubmit = async () => {
        const isValid = tempProofOfWork.every(pow =>
            pow.description.trim() !== '' &&
            pow.skills.length > 0 &&
            pow.link.trim() !== ''
        );

        if (!isValid) {
            toast({
                title: "Validation Error",
                description: "Please fill in all fields",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);
        try {
            const powArray = Array.isArray(tempProofOfWork)
                ? tempProofOfWork
                : [tempProofOfWork];

            const response = await axios.post('/api/proofofwork', powArray);

            if (response.data.data) {
                setProofOfWork(prev => [...prev, ...response.data.data]);
                setPoWOpen(false);
                setTempProofOfWork([]);

                toast({
                    title: "Success",
                    description: "Proof of work added successfully"
                });
            }
        } catch (error) {
            console.error('Error updating Proof of Work:', error);
            toast({
                title: "Error Occurred",
                description: "Failed to add proof of work"
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleRemoveSkill = (skillToRemove: string) => {
        setTempSkills(tempSkills.filter(skill => skill !== skillToRemove));
    };
    const handleAddPow = () => {
        setTempProofOfWork([...tempProofOfWork, {
            description: '',
            skills: [],
            link: ''
        }]);
    };
    const handleAddSkillToPow = (powIndex: number, skill: string) => {
        const updatedPow = [...tempProofOfWork];
        if (!updatedPow[powIndex].skills.includes(skill)) {
            updatedPow[powIndex] = {
                ...updatedPow[powIndex],
                skills: [...updatedPow[powIndex].skills, skill]
            };
            setTempProofOfWork(updatedPow);
        }
    };
    const handleRemoveSkillFromPow = (powIndex: number, skillToRemove: string) => {
        const updatedPow = [...tempProofOfWork];
        updatedPow[powIndex] = {
            ...updatedPow[powIndex],
            skills: updatedPow[powIndex].skills.filter(skill => skill !== skillToRemove)
        };
        setTempProofOfWork(updatedPow);
    };

    // Card animation variants
    const cardVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <SmoothScroll>
            <main className="min-h-screen py-20">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="grid md:grid-cols-[300px,1fr] gap-6">
                        {/* Public Profile Information */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-full flex flex-col items-center gap-4 md:items-start">
                                <motion.div
                                    className="w-full flex justify-center relative"
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={session?.user?.image || userprofileImage}
                                        alt="User Profile Image"
                                        className="h-48 w-48 rounded-full border-4 border-white shadow-lg mx-auto"
                                        width={100}
                                        height={100}
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handlePublicEditClick}
                                        className="absolute top-0 right-0"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </motion.div>
                                <motion.div
                                    className="flex-1 space-y-4 text-center md:text-left p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="text-center md:text-left space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{session?.user?.name}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {publicData.tagline || "Please update your tagline"}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start text-gray-800 dark:text-gray-100">
                                            <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                                            <span>{session?.user?.email}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="space-y-4 w-full text-gray-600 dark:text-gray-100 text-center md:text-left">
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Building2 className="h-4 w-4" />
                                                <span>{publicData.college || "Please update your college"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <MapPin className="h-4 w-4" />
                                                <span>{publicData.location || "Please update your location"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Social Links</h3>
                                        <div className="flex gap-3 justify-center md:justify-start">
                                            <SocialButton href={publicData.github} icon={Github} />
                                            <SocialButton href={publicData.linkedin} icon={Linkedin} />
                                            {/* {
                                                publicData.twitter && (
                                                    <Link href={publicData.twitter} className="flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="none" viewBox="0 0 512 512" id="twitter">
                                                            <g clip-path="url(#clip0_84_15698)">
                                                                <rect width="512" height="512" fill="#fff" rx="60"></rect>
                                                                <path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_84_15698">
                                                                    <rect width="512" height="512" fill="#fff"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                )
                                            } */}
                                            <SocialButton href={publicData.twitter} icon={X} />
                                            <SocialButton href={publicData.leetcode} icon={Code} />
                                            {/* <Link href={publicData.leetcode}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
                                                    <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
                                                    <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
                                                    <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
                                                </svg>
                                            </Link> */}
                                            <SocialButton href={publicData.website} icon={Award} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <Sheet open={publicDataOpen} onOpenChange={setPublicDataOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Profile</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="">
                                            <Label htmlFor="tagline">tagline</Label>
                                            <Input
                                                id="tagline"
                                                name="tagline"
                                                value={tempPublicData.tagline}
                                                onChange={handlePublicDataChange}
                                                placeholder="Front-End Developer"
                                            />
                                            <div className="text-xs text-gray-500 mt-1">
                                                Use this space to describe yourself in one line.
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div>
                                                <Label htmlFor="college">College</Label>
                                                <Input
                                                    id="college"
                                                    name="college"
                                                    value={tempPublicData.college}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Lovely Professional University"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="location">Location</Label>
                                                <Input
                                                    id="location"
                                                    name="location"
                                                    value={tempPublicData.location}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Jalandhar, Punjab, India"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="github">GitHub</Label>
                                                <Input
                                                    id="github"
                                                    name="github"
                                                    value={tempPublicData.github}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your GitHub Profile Link"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin">LinkedIn</Label>
                                                <Input
                                                    id="linkedin"
                                                    name="linkedin"
                                                    value={tempPublicData.linkedin}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LinkedIn Profile Link"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="twitter">Twitter</Label>
                                                <Input
                                                    id="twitter"
                                                    name="twitter"
                                                    value={tempPublicData.twitter}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your Twitter Profile Link"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="leetcode">LeetCode</Label>
                                                <Input
                                                    id="leetcode"
                                                    name="leetcode"
                                                    value={tempPublicData.leetcode}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LeetCode Profile Link"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="website">Personal Website</Label>
                                                <Input
                                                    id="website"
                                                    name="website"
                                                    value={tempPublicData.website}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your personal website URL"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setPublicDataOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handlePublicDataSubmit}>
                                                {
                                                    isSubmitting ? "Updating" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Private Data Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Card className="bg-sky-100 text-black p-4 w-full flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <h3 className="font-semibold">Private Info</h3>
                                                <Lock size={20} />
                                            </div>
                                            <span className="font-tiny text-xs">Only visible to you</span>
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={handlePrivateEditClick}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Separator />
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Gender</span>
                                            <span>{privateData.gender || "Add"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Phone</span>
                                            <span>{privateData.phone || "Add"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Year of birth</span>
                                            <span>{privateData.yearOfBirth || "Add"}</span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                            <Sheet open={privateDataOpen} onOpenChange={setPrivateDataOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '90vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Private Info</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">Gender</Label>
                                            <Select
                                                value={tempPrivateData.gender}
                                                onValueChange={(value) => handlePrivateDataChange('gender', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Male">Male</SelectItem>
                                                    <SelectItem value="Female">Female</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={tempPrivateData.phone}
                                                onChange={handlePhoneChange}
                                                placeholder="Enter your phone number"
                                                pattern="[0-9]*"
                                                inputMode="numeric"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="yearOfBirth">Date of Birth</Label>
                                            <Input
                                                id="yearOfBirth"
                                                name="yearOfBirth"
                                                type="date"
                                                value={tempPrivateData.yearOfBirth}
                                                onChange={(e) => handlePrivateDataChange('yearOfBirth', e.target.value)}
                                                max={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    setTempPrivateData({ ...privateData });
                                                    setPrivateDataOpen(false);
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button onClick={handlePrivateDataSubmit}>
                                                {
                                                    isSubmitting ? "Updating Data" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* About Me Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Card className="p-3 w-full flex flex-col sm:flex-row gap-4">
                                    <motion.div
                                        className="flex-1"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div
                                            className="flex justify-between items-center"
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <h3 className="font-semibold">About Me</h3>
                                            <Button variant="ghost" size="icon" onClick={handleAboutMeEditClick}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </motion.div>
                                        <motion.div
                                            className="flex gap-4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {
                                                aboutme ? (
                                                    <motion.p
                                                        className="font-medium"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                    >
                                                        {aboutme}
                                                    </motion.p>
                                                ) : (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                    >
                                                        Please update this section
                                                    </motion.p>
                                                )
                                            }
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="w-full sm:w-1/2"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <motion.h3
                                            className="font-semibold mb-4 text-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            Your Resume
                                        </motion.h3>
                                        <motion.p
                                            className="bg-yellow-400 dark:text-black p-4 rounded-lg"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.5,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 25
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
                                            }}
                                        >
                                            We are working on integrating this, so that anyone can look up your resume and you can showcase your resume to others...
                                        </motion.p>
                                    </motion.div>
                                </Card>
                            </motion.div>
                            <Sheet open={aboutMeOpen} onOpenChange={setAboutMeOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit About Me</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="bio">Bio</Label>
                                            <Input
                                                id="bio"
                                                name="bio"
                                                value={tempAboutMe}
                                                onChange={handleAboutMeChange}
                                                placeholder="Enter your bio"
                                            />
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setAboutMeOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleAboutMeSubmit}>
                                                {
                                                    isSubmitting ? "Updating" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Interests Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Card className="p-3 flex flex-col gap-2">
                                    <motion.div
                                        className="flex justify-between items-center"
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <h3 className="font-semibold">Technical Interests</h3>
                                        <Button variant="ghost" size="icon" onClick={handleInterestsEditClick}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </motion.div>

                                    {
                                        selectedInterests && selectedInterests.length > 0 ? (
                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.1
                                                        }
                                                    }
                                                }}
                                            >
                                                {
                                                    selectedInterests.map((interest, index) => (
                                                        <motion.span
                                                            key={interest}
                                                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                                            variants={{
                                                                hidden: { opacity: 0, scale: 0.8, y: 10 },
                                                                visible: { opacity: 1, scale: 1, y: 0 }
                                                            }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 20
                                                            }}
                                                            whileHover={{
                                                                scale: 1.1,
                                                                rotate: [-1, 1, -1, 0],
                                                                transition: {
                                                                    rotate: {
                                                                        repeat: 0,
                                                                        duration: 0.3
                                                                    }
                                                                }
                                                            }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            {interest}
                                                        </motion.span>
                                                    ))
                                                }
                                            </motion.div>
                                        ) : (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                Please select your technical interests
                                            </motion.p>
                                        )
                                    }
                                </Card>
                            </motion.div>
                            <Sheet open={interestsOpen} onOpenChange={setInterestsOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Technical Interests</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {
                                                interestsSelection.map((interest) => (
                                                    <div key={interest} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={interest}
                                                            checked={tempSelectedInterests.includes(interest)}
                                                            onCheckedChange={() => handleInterestChange(interest)}
                                                            className="ring-2"
                                                        />
                                                        <label
                                                            htmlFor={interest}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {interest}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setInterestsOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleInterestsSubmit}>
                                                {
                                                    isSubmitting ? "Updating Interests" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Skill Choose Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Card className="p-3">
                                    <motion.div
                                        className="flex justify-between items-center mb-3"
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <h3 className="font-semibold">Technical Skills</h3>
                                        <Button variant="ghost" size="icon" onClick={handleSkillEditClick}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </motion.div>
                                    <div className="flex gap-2 flex-wrap">
                                        {
                                            selectedSkill && selectedSkill.length > 0 ? (
                                                <motion.div
                                                    className="flex flex-wrap gap-2"
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        hidden: { opacity: 0 },
                                                        visible: {
                                                            opacity: 1,
                                                            transition: {
                                                                staggerChildren: 0.08
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {
                                                        selectedSkill.map((skill, index) => (
                                                            <motion.span
                                                                key={index}
                                                                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                                                variants={{
                                                                    hidden: {
                                                                        opacity: 0,
                                                                        scale: 0.8,
                                                                        x: -20
                                                                    },
                                                                    visible: {
                                                                        opacity: 1,
                                                                        scale: 1,
                                                                        x: 0
                                                                    }
                                                                }}
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 17
                                                                }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    backgroundColor: "var(--secondary-darker)",
                                                                    transition: {
                                                                        duration: 0.2,
                                                                        ease: "easeInOut"
                                                                    }
                                                                }}
                                                                whileTap={{
                                                                    scale: 0.95,
                                                                    rotate: [-2, 2, 0]
                                                                }}
                                                            >
                                                                {skill}
                                                            </motion.span>
                                                        ))
                                                    }
                                                </motion.div>
                                            ) : (
                                                <motion.p
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: 0.3,
                                                        type: "spring",
                                                        stiffness: 300
                                                    }}
                                                >
                                                    Please update your skills
                                                </motion.p>
                                            )
                                        }
                                    </div>
                                </Card>
                            </motion.div>
                            <Sheet open={skillOpen} onOpenChange={setSkillOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>Edit Skills</SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        <div className="space-y-4">
                                            <Label>Your Skills</Label>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {
                                                    tempSkills.map((skill, index) => (
                                                        <Badge key={index} className="flex items-center gap-1">
                                                            {skill}
                                                            <button
                                                                onClick={() => handleRemoveSkill(skill)}
                                                                className="ml-1 hover:text-red-500"
                                                            >
                                                                <X className="h-3 w-3" />
                                                            </button>
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                            <Select
                                                value={currentSkill}
                                                onValueChange={handleAddSkill}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a skill" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        technicalSkills
                                                            .filter(skill => !tempSkills.includes(skill))
                                                            .map((skill) => (
                                                                <SelectItem key={skill} value={skill}>
                                                                    {skill}
                                                                </SelectItem>
                                                            ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setSkillOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handleSkillSubmit}>
                                                {
                                                    isSubmitting ? "Updating Skill" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Proof Of Work Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Card className="p-3">
                                    <motion.div
                                        className="flex justify-between items-center mb-6"
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <h3 className="font-semibold">Proof Of Work</h3>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button onClick={handleAddNewPoWClick}>
                                                <motion.div
                                                    animate={{ rotate: [0, 180, 360] }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                >
                                                    <Plus className="h-4 w-4 mr-2" />
                                                </motion.div>
                                                Add PoW
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                    <div>
                                        {proofOfWork.length > 0 ? (
                                            <motion.div
                                                className="flex flex-wrap flex-col gap-2"
                                                initial="hidden"
                                                animate="visible"
                                                variants={{
                                                    visible: {
                                                        transition: {
                                                            staggerChildren: 0.15
                                                        }
                                                    }
                                                }}
                                            >
                                                {proofOfWork.map((pow, index) => (
                                                    <motion.div
                                                        key={index}
                                                        variants={{
                                                            hidden: { opacity: 0, y: 20, scale: 0.95 },
                                                            visible: { opacity: 1, y: 0, scale: 1 }
                                                        }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 300,
                                                            damping: 20
                                                        }}
                                                    >
                                                        <motion.div
                                                            whileHover={{
                                                                scale: 1.02,
                                                                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
                                                            }}
                                                            transition={{ type: "spring", stiffness: 400 }}
                                                        >
                                                            <Card className="p-4 bg-blue-50 border-blue-100 mb-4">
                                                                <div className="flex justify-between">
                                                                    <div className="w-full">
                                                                        <motion.p
                                                                            className="mb-2"
                                                                            initial={{ opacity: 0 }}
                                                                            animate={{ opacity: 1 }}
                                                                            transition={{ delay: 0.2 }}
                                                                        >
                                                                            {pow.description}
                                                                        </motion.p>
                                                                        <div className="flex gap-2 w-full justify-between">
                                                                            <motion.div
                                                                                className="flex items-center gap-2 flex-wrap"
                                                                                initial="hidden"
                                                                                animate="visible"
                                                                                variants={{
                                                                                    visible: {
                                                                                        transition: {
                                                                                            staggerChildren: 0.05
                                                                                        }
                                                                                    }
                                                                                }}
                                                                            >
                                                                                {pow.skills.map((skill, skillIndex) => (
                                                                                    <motion.div
                                                                                        key={skillIndex}
                                                                                        variants={{
                                                                                            hidden: { opacity: 0, scale: 0.8, x: -10 },
                                                                                            visible: { opacity: 1, scale: 1, x: 0 }
                                                                                        }}
                                                                                        whileHover={{ scale: 1.1 }}
                                                                                        whileTap={{ scale: 0.95 }}
                                                                                    >
                                                                                        <Badge>{skill}</Badge>
                                                                                    </motion.div>
                                                                                ))}
                                                                            </motion.div>
                                                                            <motion.div
                                                                                whileHover={{ scale: 1.05 }}
                                                                                whileTap={{ scale: 0.95 }}
                                                                            >
                                                                                <Link href={pow.link} target="_blank">
                                                                                    <Button>View</Button>
                                                                                </Link>
                                                                            </motion.div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        ) : (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: 0.3,
                                                    type: "spring",
                                                    stiffness: 300
                                                }}
                                            >
                                                Please update your Proof of Work Section
                                            </motion.p>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                            <Sheet open={powOpen} onOpenChange={setPoWOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
                                >
                                    <SheetHeader>
                                        <SheetTitle>
                                            {
                                                isAddingNew ? "Add New Proof of Work" : "Edit Proof of Work"
                                            }
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="grid gap-6 py-4">
                                        {
                                            tempProofOfWork && tempProofOfWork.map((pow: ProofOfWorkProps, index: number) => (
                                                <div key={index} className="space-y-2 flex flex-col gap-4">
                                                    <div>
                                                        <Label htmlFor={`pow-description-${index}`}>Description</Label>
                                                        <Input
                                                            id={`pow-description-${index}`}
                                                            value={pow.description}
                                                            onChange={(e) => handleProofOfWorkChange(index, 'description', e.target.value)}
                                                            placeholder="Enter proof of work description"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Skills</Label>
                                                        <div className="flex flex-wrap gap-2 mb-2">
                                                            {
                                                                pow.skills.map((skill: string, skillIndex: number) => (
                                                                    <Badge key={skillIndex} className="flex items-center gap-1">
                                                                        {skill}
                                                                        <button
                                                                            onClick={() => handleRemoveSkillFromPow(index, skill)}
                                                                            className="ml-1 hover:text-red-500"
                                                                        >
                                                                            <X className="h-3 w-3" />
                                                                        </button>
                                                                    </Badge>
                                                                ))
                                                            }
                                                        </div>
                                                        <Select
                                                            onValueChange={(value) => handleAddSkillToPow(index, value)}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a skill" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {
                                                                    technicalSkills
                                                                        .filter(skill => !pow.skills.includes(skill))
                                                                        .map((skill) => (
                                                                            <SelectItem key={skill} value={skill}>
                                                                                {skill}
                                                                            </SelectItem>
                                                                        ))
                                                                }
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <Label htmlFor={`pow-link-${index}`}>Project URL</Label>
                                                        <Input
                                                            id={`pow-link-${index}`}
                                                            value={pow.link}
                                                            onChange={(e) => handleProofOfWorkChange(index, 'link', e.target.value)}
                                                            placeholder="Enter the Github or Live link"
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="flex justify-end gap-3 mt-6">
                                            <Button variant="outline" onClick={() => setPoWOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button onClick={handlePoWSubmit}>
                                                {
                                                    isSubmitting ? "Updating Proof of Work" : "Save Changes"
                                                }
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </motion.div>
                    </div>
                </div>
            </main >
        </SmoothScroll >
    );
}