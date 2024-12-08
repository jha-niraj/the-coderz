import { Project } from './../app/types/index';
"use server"

import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";
import { getCurrentUser } from "./user.action";

const currentUser = await getCurrentUser();

export async function userProjectList() {
    try {
        const projectList = await prisma.user.findFirst({
            where: {
                id: currentUser?.id
            },
            select: {
                projects: {
                    select: {
                        projectId: true,
                        isSubmitted: true,
                        isApproved: true
                    }
                }
            }
        })
        if(!projectList) {
            return null;
        }
        return projectList;
    } catch(err: any) {
        console.error("Error Occurred while fetching the user project list", err);
        return err;
    }
}

export async function userTotalProjectCount() {
    try {
        const response = await prisma.user.findFirst({
            where: {
                id: currentUser?.id
            },
            select: {
                projects: true
            }
        })
        if(!response) {
            return null;
        }
        return response.projects.length;
    } catch(err: any) {
        console.error("Error Occurred while fetching the user project count", err);
        return null;
    }
}

export async function getActiveProjectLists() {
    try {   
        const response = await prisma.user.findFirst({
            where: {
                id: currentUser?.id
            },
            select: {
                projects: true
            }
        })
        if(!response) {
            return null;
        }
        return response.projects;
    } catch(err: any) {
        console.error("Error Occurred while fetching the active project list", err);
        return null;
    }
}

export async function getSubmittedApprovedProjectLists() {
    try {
        const response = await prisma.user.findFirst({
            where: {
                id: currentUser?.id
            },
            select: {
                projects: {
                    where: {
                        OR: [
                            {
                                isSubmitted: true
                            },
                            {
                                isApproved: true
                            }
                        ]
                    }
                }
            }
        })
        if(!response) {
            return null;
        }
        return response.projects.length ? response.projects : null;
    } catch(err: any) {
        console.error("Error Occurred while fetching the submitted/approved project list", err);
        return null;
    }
}