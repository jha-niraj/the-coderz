import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/actions/user.action";

export async function POST(req: Request) {
    const currentUser = await getCurrentUser();
    if(!currentUser) {
        return null;
    }

    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const response = await prisma.projects.create({
            data: {
                userId: currentUser?.id,
                projectId: id
            }
        })

        return NextResponse.json(
            { message: 'Submission successful', data: response },
            { status: 201 }
        )
    } catch(err: any) {
        console.error('Project Start error:', err)
        return NextResponse.json(
            { error: 'Failed to start an Project' },
            { status: 500 }
        )
    }
}