import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/actions/user.action";

export async function POST(req: NextRequest) {
    try {
        // Remove the res: NextResponse parameter as it's not typically used in route handlers
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            // Return a Response object instead of null
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { id } = await req.json();
        if (!id) {
            // Use Response instead of NextResponse
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await prisma.projects.create({
            data: {
                userId: currentUser.id,
                projectId: id
            }
        });

        // Use Response instead of NextResponse
        return new Response(JSON.stringify({
            message: 'Submission successful',
            data: response
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err: any) {
        console.error('Project Start error:', err);
        // Use Response instead of NextResponse
        return new Response(JSON.stringify({ error: 'Failed to start a Project' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}