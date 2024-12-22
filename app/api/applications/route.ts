import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, github, linkedin, position, coverletter } = await req.json();

        if(!name || !email || !github || !linkedin || !position || !coverletter) {
            return NextResponse.json({ msg: "Please fill all the fields" }, { status: 503 });
        }

        const response = await prisma.applications.create({
            data: {
                name,
                email,
                github,
                linkedin,
                position,
                coverletter
            }
        })

        if(!response) {
            return NextResponse.json({ msg: "Failed to submit the application, please try again" }, { status: 501 });
        }
        return NextResponse.json({ msg: "Application submitted successfully", response }, { status: 200 });
    } catch (err: any) {
        console.log("Error while updating Interests Section: " + err);
        return NextResponse.json({ msg: "Error while updating interests section" }, { status: 501 });
    }
}