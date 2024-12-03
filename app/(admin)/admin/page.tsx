"use client";

import { Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageTitle from "./_components/pagetitle";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getApprovedProjectsCounts, getProjectsCounts, getSubmittedProjectsCounts, getUsersCount } from "@/actions/admin.action";

interface ProjectCountProps {
    submittedProjects: number;
    approvedProjects: number;
    totalProjects: number;
}
const AdminDashboard = () => {
    const [userCount, setUserCount] = useState<number>(0);
    const [submittedProjectCount, setSubmittedProjectCount] = useState<number>(0);
    const [approvedProjectCount, setApprovedProjectCount] = useState<number>(0);
    const [projectCount, setProjectCount] = useState<ProjectCountProps>({
        submittedProjects: 0,
        approvedProjects: 0,
        totalProjects: 0
    });
    const router = useRouter();
    const { data: session, status } = useSession();

    // useEffect(() => {
    //     if(!session || !session?.user) {
    //         router.push("/");
    //     }
    // }, [session, router])

    const dashboardData = [
        {
            title: "Users",
            count: userCount
        },
        {
            title: "Submitted Projects",
            count: projectCount.submittedProjects
        },
        {
            title: "Approved Projects",
            count: projectCount.approvedProjects
        },
        {
            title: "Total Projects",
            count: projectCount.totalProjects
        },
    ]

    useEffect(() => {
        const fetchData = async () => {
            const userCountData = await getUsersCount();
            const submittedProjectCountData = await getSubmittedProjectsCounts();
            const approvedProjectCountData = await getApprovedProjectsCounts();
            const projectCounts = await getProjectsCounts();

            setUserCount(userCountData);
            setSubmittedProjectCount(submittedProjectCountData);
            setApprovedProjectCount(approvedProjectCountData);
            setProjectCount({
                submittedProjects: projectCounts.submitted,
                approvedProjects: projectCounts.approved,
                totalProjects: projectCounts.total
            })
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-5 h-full p-2 rounded-lg w-full overflow-hidden">
            <div className="border-b">
                <PageTitle title="Dashboard" />
            </div>
            <section className="flex flex-col lg:flex-row w-full h-full gap-4">
                <section className="flex w-full h-full flex-col gap-2">
                    <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2">
                        {
                            dashboardData.map((data, index) => {
                                return (
                                    <div key={index} className="p-4 flex w-full justify-between items-center shadow-lg rounded-lg">
                                        <h1>{ data.title }</h1>
                                        <h1>{ data.count }</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </section>
        </div>
    );
};

export default AdminDashboard;