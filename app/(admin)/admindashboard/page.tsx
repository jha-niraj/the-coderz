"use client";

import { Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import PageTitle from "./_components/pagetitle";
import AdminPageButton from "./_components/adminpagebutton";
import UserChartCard from "./_components/userchartcard";
import Link from "next/link";
import { getMenteeCount } from "@/actions/admin.action";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [menteeCount, setMenteeCount] = useState<number>(0);
    const [menteeRegistrationData, setMenteeRegistrationData] = useState<any[]>([]);
    const [mentorRegistrationData, setMentorRegistrationData] = useState<any[]>([]);
    const [mentorRequests, setMentorRequests] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const menteeCountData = await getMenteeCount();
            // const menteeRegistrationData = await getMenteeRegistrations();
            // const mentorRegistrationData = await getMentorRegistrations();
            // const mentorRequestsData = await getMentorRequests();

            setMenteeCount(menteeCountData);
            setMenteeRegistrationData(menteeRegistrationData);
            setMentorRegistrationData(mentorRegistrationData);
            // setMentorRequests(mentorRequestsData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-5 h-full p-2 rounded-lg w-full bg-white overflow-hidden">
            <div className="border-b">
                <PageTitle title="Dashboard" />
            </div>
            <section className="flex flex-col lg:flex-row w-full h-full gap-4">
                <section className="flex w-full lg:w-[70%] h-full flex-col gap-2">
                    <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Users</CardTitle>
                                    <Users2 />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h1>{menteeCount}</h1>
                                <CardDescription>
                                    {/* // make actual percentage */}
                                    <p>20% more than last week</p>
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Mentors</CardTitle>
                                    <Users2 />
                                </div>
                            </CardHeader>
                            <CardContent>
                                {/* // Make it mentor Count */}
                                <h1>20</h1>
                                <CardDescription>
                                    {/* // make actual percentage */}
                                    <p>10% more than last week</p>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid w-full h-full grid-cols-1 sm:grid-cols-1 gap-4 gap-x-8 transition-all md:grid-cols-2">
                        <UserChartCard data={menteeRegistrationData} />
                    </div>
                </section>
                <Card className="flex flex-col w-full lg:w-[30%] bg-gradient-to-br from-sky-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 bg-white bg-opacity-70 backdrop-blur-sm">
                        <h1 className="font-bold text-3xl text-indigo-900 mb-2">
                            Mentor Requests
                        </h1>
                        <AdminPageButton />
                        <h4 className="text-xl text-center font-medium text-indigo-700">
                            You have {mentorRequests.length} mentor requests
                        </h4>
                    </div>
                    <div className="space-y-4">
                        <ScrollArea className="h-[55vh] lg:h-[65vh]">
                            {mentorRequests.map((user: User, index: number) => (
                                <Card
                                    key={index}
                                    className="bg-white rounded-lg p-4 m-2 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center p-4">
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                className="w-20 h-20 rounded-full border-2 border-indigo-200"
                                                src={user?.image!}
                                                alt="Mentor Image"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <div className="ml-4 flex-grow">
                                            <h2 className="font-semibold text-lg text-gray-800">
                                                {user.name}
                                            </h2>
                                            <p className="text-sm text-gray-600 italic">
                                                {user.tagline}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                                        <Badge
                                            variant="destructive"
                                            className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                                        >
                                            Pending
                                        </Badge>
                                        <Link href={`/pendingmentor/${user.id}`}
                                            className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
                                            {/* <Button
                        variant="outline"
                        size="sm"
                      > */}
                                            View Details
                                            {/* </Button> */}
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </ScrollArea>
                    </div>
                </Card>
            </section>
        </div>
    );
};

export default AdminDashboard;