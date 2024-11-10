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
    }, [])

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
    const handlePrivateDataSubmit = async() => {
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
            setSelectedSkill(response.data.skill);
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

    return (
        <SmoothScroll>
            <main className="min-h-screen py-20">
                <div className="max-w-7xl mx-auto p-6">
                    <div className="grid md:grid-cols-[300px,1fr] gap-6">
                        <div className="space-y-6">
                            {/* Public Data Section */}
                            <div className="w-full flex flex-col items-center gap-4 md:items-start">
                                <div className="w-full flex justify-center relative">
                                    <Avatar className="h-48 w-48 rounded-full border-4 border-white shadow-lg mx-auto">
                                        <AvatarImage src={session?.user?.image!} alt="User Profile Picture" />
                                        <AvatarFallback>
                                            <Image
                                                src={userprofileImage}
                                                alt="Profile"
                                                className="object-cover"
                                                width={192}
                                                height={192}
                                            />
                                        </AvatarFallback>
                                    </Avatar>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handlePublicEditClick}
                                        className="absolute top-0 right-0"
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex-1 space-y-4 text-center md:text-left p-4">
                                    <div className="text-center md:text-left space-y-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{session?.user?.name}</h2>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {publicData.tagline || "Please update your tagline"}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center md:justify-start text-gray-800 dark:text-gray-300">
                                            <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3" />
                                            <span>{session?.user?.email}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="space-y-4 w-full text-gray-600 dark:text-gray-400 text-center md:text-left">
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Building2 className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                                                <span>{publicData.college || "Please update your college"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                                                <span>{publicData.location || "Please update your location"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Social Links</h3>
                                        <div className="flex gap-3 justify-center md:justify-start">
                                            <SocialButton href={publicData.github} icon={Github} />
                                            <SocialButton href={publicData.linkedin} icon={Linkedin} />
                                            <SocialButton href={publicData.twitter} icon={Twitter} />
                                            <SocialButton href={publicData.leetcode} icon={Code} />
                                            <SocialButton href={publicData.website} icon={Award} />
                                        </div>
                                    </div>
                                </div>
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
                                                placeholder="Enter your tagline"
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
                                                    placeholder="Enter your headline"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="location">Location</Label>
                                                <Input
                                                    id="location"
                                                    name="location"
                                                    value={tempPublicData.location}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your headline"
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
                                                    placeholder="Enter your GitHub Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin">LinkedIn</Label>
                                                <Input
                                                    id="linkedin"
                                                    name="linkedin"
                                                    value={tempPublicData.linkedin}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LinkedIn Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="twitter">Twitter</Label>
                                                <Input
                                                    id="twitter"
                                                    name="twitter"
                                                    value={tempPublicData.twitter}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your Twitter Profile"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="leetcode">LeetCode</Label>
                                                <Input
                                                    id="leetcode"
                                                    name="leetcode"
                                                    value={tempPublicData.leetcode}
                                                    onChange={handlePublicDataChange}
                                                    placeholder="Enter your LeetCode Profile"
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
                            <Card className="bg-sky-100 p-4 w-full flex flex-col gap-4">
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
                            <Sheet open={privateDataOpen} onOpenChange={setPrivateDataOpen}>
                                <SheetContent
                                    side="right"
                                    className="w-full h-full sm:w-[80vw] md:w-[40vw] sm:max-w-[80vw] p-6 overflow-y-auto"
                                    style={{ maxWidth: '60vw' }}
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
                        </div>

                        <div className="space-y-2">
                            {/* About Me Section */}
                            <Card className="p-3 w-full flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">About Me</h3>
                                        <Button variant="ghost" size="icon" onClick={handleAboutMeEditClick}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex gap-4">
                                        {
                                            aboutme ? (
                                                <p className="font-medium">{aboutme}</p>
                                            ) : (
                                                <p>Please update this section</p>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <h3 className="font-semibold mb-4">Your Resume</h3>
                                    <p className="bg-yellow-400 dark:text-black p-4 rounded-lg">
                                        We are working on integrating this, so that anyone can look up your resume and you can showcase your resume to others...
                                    </p>
                                </div>
                            </Card>
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
                            <Card className="p-3 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">Technical Interests</h3>
                                    <Button variant="ghost" size="icon" onClick={handleInterestsEditClick}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                {
                                    selectedInterests.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {
                                                selectedInterests.map((interest) => (
                                                    <span
                                                        key={interest}
                                                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                                    >
                                                        {interest}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                        <p>Please select your technical interests</p>
                                    )
                                }
                            </Card>
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
                                            {interestsSelection.map((interest) => (
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
                                            ))}
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
                            <Card className="p-3">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold">Technical Skills</h3>
                                    <Button variant="ghost" size="icon" onClick={handleSkillEditClick}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {
                                        selectedSkill.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {
                                                    selectedSkill.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <p>Please update your skills</p>
                                        )
                                    }
                                </div>
                            </Card>
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
                                                {tempSkills.map((skill, index) => (
                                                    <Badge key={index} className="flex items-center gap-1">
                                                        {skill}
                                                        <button
                                                            onClick={() => handleRemoveSkill(skill)}
                                                            className="ml-1 hover:text-red-500"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Select
                                                value={currentSkill}
                                                onValueChange={handleAddSkill}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a skill" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {technicalSkills
                                                        .filter(skill => !tempSkills.includes(skill))
                                                        .map((skill) => (
                                                            <SelectItem key={skill} value={skill}>
                                                                {skill}
                                                            </SelectItem>
                                                        ))}
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
                            <Card className="p-3">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-semibold">Proof of Work</h3>
                                    <Button onClick={handleAddNewPoWClick}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add PoW
                                    </Button>
                                </div>
                                <div>
                                    {
                                        proofOfWork.length > 0 ? (
                                            <div className="flex flex-wrap flex-col gap-2">
                                                {
                                                    proofOfWork.map((pow, index) => (
                                                        <Card key={index} className="p-4 bg-blue-50 border-blue-100 mb-4">
                                                            <div className="flex justify-between">
                                                                <div className="w-full">
                                                                    <p className="mb-2">{pow.description}</p>
                                                                    <div className="flex gap-2 w-full justify-between">
                                                                        <div className="flex items-center gap-2 flex-wrap">
                                                                            {
                                                                                pow.skills.map((skill, skillIndex) => (
                                                                                    <Badge key={skillIndex}>{skill}</Badge>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                        <Link href={pow.link} target="_blank">
                                                                            <Button>View</Button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <p>Please update your Proof of Work Section</p>
                                        )
                                    }
                                </div>
                            </Card>
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
                        </div>
                    </div>
                </div>
            </main>
        </SmoothScroll>
    );
}