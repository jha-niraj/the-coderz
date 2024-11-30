"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
// import { getUserByEmail } from "@/app/data/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { Role } from "@prisma/client";

interface UserRegistration {
    date: string;
    count: number;
}

// User related API calls:
export async function getUsersCount() {
    try {
        return await prisma.user.count({});
    } catch (err: any) {
        console.error("Error Occurred while getting the mentee count", err);
        return err;
    }
}
export async function getUsersDetails(role: Role) {
    try {
        return await prisma.user.findMany({
            where: { 
                role
             },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    } catch (err: any) {
        console.error("Error Occurred while getting the mentees", err);
        return err;
    }
}
export async function getUserDetailsById(id: string, role: Role) {
    try {
        const mentee = await prisma.user.findFirst({
            where: { id, role },
        });
        if (!mentee) throw new Error("Mentee not found");
        return mentee;
    } catch (err: any) {
        console.error("Failed to fetch mentee details by id", err);
        return err;
    }
}
export async function deleteUserById(id: any) {
    try {
        const deletedUser = await prisma.user.delete({
            where: { id },
        });
        if (!deletedUser) throw new Error("Failed to delete user");
        return { success: true, data: deletedUser };
    } catch (err: any) {
        console.error("Failed to delete the user", err);
        return err;
    }
}
export const updateVerification = async (id: any) => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id,
            },
            data: {
                emailVerified: true,
            },
        });
        return { success: true };
    } catch (error) {
        console.log(error);
        console.error("Error updating User:", error);
        return {
            error: "Server error",
        };
    }
};

// Projects related API Calls:
export const getSubmittedProjectsCounts = async() => {
    try {
        return await prisma.projects.count({});
    } catch (err: any) {
        console.error("Error Occurred while getting the projects count", err);
        return err;
    }
}
export const getSubmittedProjects = async() => {
    try {
        const projects = await prisma.projects.findMany({
            where: {
                isSubmitted: true
            }
        })
        console.log(projects);
        return projects;
    } catch(err: any) {
        console.error("Error Fetching Projects:", err);
    }
}
export async function approveProject(projectId: string) {
    try {
        await prisma.projects.update({
            where: {
                id: projectId
            },
            data: {
                isApproved: true
            }
        })
        return { success : true };
    } catch(err: any) {
        console.error("Error Approving Projects:", err);
    }
}