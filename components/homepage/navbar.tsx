"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon, User, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import ShinyButton from "@/components/ui/shiny-button";
import { ModeToggle } from "@/components/modetoggle";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import mainWebLogo from "@/app/lib/WhatsApp Image 2024-10-09 at 19.48.26.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(c => !c);
    const router = useRouter();

    const mobileLinks = [
        {
            name: "Resources",
            href: "/resources"
        },
        {
            name: "Communities",
            href: "/communities"
        },
        {
            name: "Services",
            href: "/services"
        },
        {
            name: "About Us",
            href: "/aboutus"
        },
    ]

    const handleLogout = async () => {
        signOut();
        router.push("/");
    }

    return (
        <div
            className={cn("fixed top-2 inset-x-0 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto z-50 transition-all duration-200", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/" className="flex gap-2 items-center justify-center">
                    <Image
                        src={mainWebLogo}
                        alt="Main Web Logo"
                        height={40}
                        width={40}
                        className="rounded-full scale-120"
                    />
                    <h1 className="">The Coder&apos;z</h1>
                </Link>
                <div className="hidden md:flex items-center justify-center gap-5">
                    <Link href="/" className="hover:scale-105 hidden lg:flex">
                        Home
                    </Link>
                    <Link href="/resources" className="hover:scale-105">
                        Resources
                    </Link>
                    {
                        status === "authenticated" ?
                            <MenuItem setActive={setActive} active={active} item="Exclusives">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/projects">Projects/Build From Scratch</HoveredLink>
                                    <HoveredLink href="/pathways">Pathways</HoveredLink>
                                    <HoveredLink href="/opensource">Open Source (coming soon)</HoveredLink>
                                </div>
                            </MenuItem>
                            :
                            ""
                    }
                    <Link href="/aboutus" className="hover:scale-105 hidden lg:flex">
                        About Us
                    </Link>
                    <Link href="/communities" className="hover:scale-105">
                        Communities
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/services">Website Development</HoveredLink>
                            <HoveredLink href="/services">Video Editing</HoveredLink>
                            <HoveredLink href="/services">Thumbnail Design</HoveredLink>
                            <HoveredLink href="/services">Powerpoint Creation</HoveredLink>
                        </div>
                    </MenuItem>
                </div>
                <div className="hidden md:flex gap-2 items-center justify-center">
                    <div>
                        <ModeToggle />
                    </div>
                    {
                        status === "authenticated" ?
                            <DropdownMenu>
                                <DropdownMenuTrigger className="focus:outline-none">
                                    <Avatar>
                                        <AvatarImage src={session?.user?.image!} alt="@shadcn" />
                                        <AvatarFallback><User size={24} /></AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-36">
                                    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link href="/dashboard">
                                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                    </Link>
                                    <Link href="/profile">
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                    </Link>
                                    {/* <Link href="/secondprofile">
                                        <DropdownMenuItem>Second Profile</DropdownMenuItem>
                                    </Link> */}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleLogout}
                                        className="text-red-500">
                                        Log Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            :
                            <Link href="/signin" className="w-full">
                                <ShinyButton>Sign In</ShinyButton>
                            </Link>
                    }
                </div>
                <div className="md:hidden flex gap-3 items-center justify-center cursor-pointer">
                    <ModeToggle />
                    <div onClick={toggleMobileMenu}>
                        <MenuIcon size={36} />
                    </div>
                </div>
            </Menu>
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={cn(
                                "fixed h-full w-full inset-0 p-10 z-[50] bg-black text-white dark:text-black dark:bg-background flex flex-col justify-between",
                                className
                            )}
                        >
                            <div
                                className="absolute cursor-pointer right-8 top-12 z-50 text-white dark:text-neutral-200"
                                onClick={toggleMobileMenu}
                            >
                                <X size={32} />
                            </div>
                            <div className="flex flex-col space-y-6 pt-10">
                                {
                                    status === "authenticated" ?
                                        <div className="flex flex-col gap-4">
                                            <Link onClick={toggleMobileMenu} href="/dashboard" className="text-lg text-white">Dashboard</Link>
                                            <Link onClick={toggleMobileMenu} href="/profile" className="text-lg text-white">Profile</Link>
                                            <Link onClick={toggleMobileMenu} href="/projects" className="text-lg text-white">Projects</Link>
                                            <Link onClick={toggleMobileMenu} href="/pathways" className="text-lg text-white">Pathways</Link>
                                            <Link onClick={toggleMobileMenu} href="/opensource" className="text-lg text-white">Open Source</Link>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    mobileLinks.map((link, index) => {
                                        return (
                                            <Link key={index} onClick={toggleMobileMenu} href={link.href || "#"} className="text-lg text-white">{link.name}</Link>
                                        )
                                    })
                                }
                                {
                                    status === "authenticated" ?
                                        <div>
                                            <button onClick={() => signOut()}>Log Out</button>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    status === "authenticated" ? (
                                        <>
                                            <div className="flex justify-between">
                                                <div className="flex gap-4 items-center justify-center">
                                                    <User size={32} className="rounded-full bg-gray-200 text-gray-600" />
                                                    <h1 className="text-white">{session?.user?.name}</h1>
                                                </div>
                                                <div>
                                                    <button onClick={() => signOut()}>Log Out</button>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href="/signin" onClick={toggleMobileMenu} className="w-full flex items-center bg-background rounded-lg justify-center">
                                            <ShinyButton className="w-full">Sign In</ShinyButton>
                                        </Link>
                                    )
                                }
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
