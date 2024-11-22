import { getMenteeDetailsById } from "@/actions/admin.actions"
import Image from "next/image";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Mail } from "lucide-react";

export default async function MenteeDetails({ params: { menteeid } }: { params: { menteeid: string } }) {
    const mentee = await getMenteeDetailsById(menteeid, "MENTEE");
    console.log("Mentee Id :", menteeid);
    console.log("Mentee is: ", mentee);
    return (
        <div className="w-full max-w-3xl flex items-center justify-center mx-auto px-4 md:px-0 py-10">
            <div className="flex flex-col gap-8 bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center gap-6">
                    <Avatar className="h-52 w-52">
                        <AvatarImage src={mentee?.image} width={200} height={200} />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-2">
                        <h1 className="text-3xl font-bold text-gray-800">{mentee?.name}</h1>
                        <p className="text-lg text-gray-500">{mentee?.tagline}</p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">{mentee?.bio}</p>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Interested In</h2>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        <Code className="h-4 w-4" />
                        <span>{mentee?.interestedIn}</span>
                    </div>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-600">{mentee?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}