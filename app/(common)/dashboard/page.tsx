"use client"

import { useSession } from "next-auth/react";
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Construction, Github, FileCode, User } from 'lucide-react';
import Link from 'next/link';
import SmoothScroll from "@/components/smoothscroll";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import AdminDashbaord from "@/app/(admin)/admin/page";
import StudentDashboard from "./_components/studentDashboard";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const role = session?.user?.role;

    if (session && session?.user?.role === "Admin") {
        redirect("/admin");
    }

    return (
        <SmoothScroll>
            <StudentDashboard />
        </SmoothScroll>
    )
}