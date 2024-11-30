"use client";

import { Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import PageTitle from "./_components/pagetitle";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getSubmittedProjects, getSubmittedProjectsCounts, getUsersCount } from "@/actions/admin.action";

const AdminDashboard = () => {
    const [ userCount, setUserCount ] = useState<number>(0);
    const [ projectCount, setProjectCount ] = useState<number>(0);
    const [menteeRegistrationData, setMenteeRegistrationData] = useState<any[]>([]);
    const [mentorRegistrationData, setMentorRegistrationData] = useState<any[]>([]);
    const [mentorRequests, setMentorRequests] = useState<User[]>([]);
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if(!session || !session?.user) {
            router.push("/");
        }
    }, [session, router])

    useEffect(() => {
        const fetchData = async () => {
            const userCountData = await getUsersCount();
            const projectCountData = await getSubmittedProjectsCounts();
            // const menteeRegistrationData = await getMenteeRegistrations();
            // const mentorRegistrationData = await getMentorRegistrations();
            // const mentorRequestsData = await getMentorRequests();

            setUserCount(userCountData);
            setProjectCount(projectCountData);
            // setMenteeRegistrationData(menteeRegistrationData);
            // setMentorRegistrationData(mentorRegistrationData);
            // setMentorRequests(mentorRequestsData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-5 h-full p-2 rounded-lg w-full overflow-hidden">
            <div className="border-b">
                <PageTitle title="Dashboard" />
            </div>
            <section className="flex flex-col lg:flex-row w-full h-full gap-4">
                <section className="flex w-full lg:w-[70%] h-full flex-col gap-2">
                    <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2">
                        <Card className="p-4">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Users</CardTitle>
                                    <Users2 />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h1>{userCount} users</h1>
                            </CardContent>
                        </Card>
                        <Card className="p-4">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Users</CardTitle>
                                    <Users2 />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h1>{projectCount} Projects Submitted</h1>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default AdminDashboard;