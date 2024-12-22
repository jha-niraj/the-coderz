"use client"

import { cn } from "@/app/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, FolderKanban, GitFork, Settings, LogOut, AppleIcon } from 'lucide-react'
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    // Function to determine if a route is active
    const isActive = (route: string) => pathname.startsWith(route);

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Admin
                    </h2>
                    <div className="space-y-1">
                        <Button 
                            variant={isActive("/admin") && !isActive("/admin/users") && !isActive("/admin/projects") && !isActive("/admin/pathways") ? "secondary" : "ghost"}
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </Link>
                        </Button>
                        <Button 
                            variant={isActive("/admin/users") ? "secondary" : "ghost"}
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin/users">
                                <Users className="mr-2 h-4 w-4" />
                                Users
                            </Link>
                        </Button>
                        <Button 
                            variant={isActive("/admin/projects") ? "secondary" : "ghost"} 
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin/projects">
                                <FolderKanban className="mr-2 h-4 w-4" />
                                Projects
                            </Link>
                        </Button>
                        <Button 
                            variant={isActive("/admin/pathways") ? "secondary" : "ghost"} 
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin/pathways">
                                <GitFork className="mr-2 h-4 w-4" />
                                Pathways
                            </Link>
                        </Button>
                        <Button 
                            variant={isActive("/admin/contacts") ? "secondary" : "ghost"}
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin/contacts">
                                <FolderKanban className="mr-2 h-4 w-4" />
                                Contacts
                            </Link>
                        </Button>
                        <Button 
                            variant={isActive("/admin/applications") ? "secondary" : "ghost"}
                            className="w-full justify-start" asChild
                        >
                            <Link href="/admin/applications">
                                <AppleIcon className="mr-2 h-4 w-4" />
                                Applications
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2">
                <Button variant="outline" onClick={() => signOut()} className="w-full justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    )
}

