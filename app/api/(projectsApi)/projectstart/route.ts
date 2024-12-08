import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/actions/user.action";

export async function POST(req: NextRequest) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { id, projectName } = await req.json();
        if (!id) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await prisma.projects.create({
            data: {
                userId: currentUser.id,
                submittedBy: currentUser?.name!,
                projectName,
                projectId: id
            }
        });

        return new Response(JSON.stringify({
            message: 'Submission successful',
            data: response
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err: any) {
        console.error('Project Start error:', err);
        return new Response(JSON.stringify({ error: 'Failed to start a Project' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}