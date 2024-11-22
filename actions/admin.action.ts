"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
// import { getUserByEmail } from "@/app/data/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

interface UserRegistration {
    date: string;
    count: number;
}

export async function getMenteeCount() {
    try {
        return await prisma.user.count({});
    } catch (err: any) {
        console.error("Error Occurred while getting the mentee count", err);
        return err;
    }
}

// export async function getMentorCount() {
//     try {
//         return await prisma.user.count({ where: { role: "MENTOR" } });
//     } catch (err: any) {
//         console.error("Error Occurred while getting the mentor count", err);
//         return err;
//     }
// }

// export async function mentorList() {
//     const session = await getServerSession(authOptions);
//     if (!session) return null;

//     const email = session?.user?.email;
//     const currentUser = await getUserByEmail(email);

//     if (!currentUser || !currentUser?.email) {
//         return;
//     }

//     try {
//         const mentorList = await prisma.user.findMany({
//             where: {
//                 role: "MENTOR",
//                 interestedIn: currentUser?.interestedIn,
//             },
//         });
//         return mentorList;
//     } catch (err: any) {
//         console.log("Error Occurred in Mentor List: " + err);
//         return err;
//     }
// }

// export async function getHrCount() {
//     try {
//         return await prisma.user.count({ where: { role: "HR" } });
//     } catch (err: any) {
//         console.error("Error Occurred while getting the HR count", err);
//         throw new Error("Failed to get HR count");
//     }
// }

export async function getMenteeDetails(email: string) {
    try {
        return await prisma.user.findMany({
            where: { 
                email: email
             },
            select: {
                id: true,
                name: true,
                email: true,
                // interestedIn: true,
            },
        });
    } catch (err: any) {
        console.error("Error Occurred while getting the mentees", err);
        return err;
    }
}
// export async function getMentorDetails() {
//     try {
//         return await prisma.user.findMany({
//             where: { role: "MENTOR" },
//             select: {
//                 id: true,
//                 name: true,
//                 email: true,
//                 interestedIn: true,
//             },
//         });
//     } catch (err: any) {
//         console.error("Error Occurred while getting the mentors", err);
//         return err;
//     }
// }

// export async function getMenteeDetailsById(id: string, role: Role) {
//     try {
//         const mentee = await prisma.user.findFirst({
//             where: { id, role },
//         });
//         if (!mentee) throw new Error("Mentee not found");
//         console.log("Mentee is: ", mentee);
//         return mentee;
//     } catch (err: any) {
//         console.error("Failed to fetch mentee details by id", err);
//         return err;
//     }
// }

// export async function getMenteeRegistrations(): Promise<UserRegistration[]> {
//     try {
//         const userRegistrations = await prisma.user.groupBy({
//             by: ["createdAt", "role"],
//             where: {
//                 role: "MENTEE",
//             },
//             _count: {
//                 _all: true,
//             },
//             orderBy: {
//                 createdAt: "asc",
//             },
//         });

//         const dateCountMap: Record<string, number> = userRegistrations.reduce(
//             (acc: Record<string, number>, { createdAt, _count }) => {
//                 const date = createdAt!.toISOString().slice(0, 10);
//                 if (!acc[date]) {
//                     acc[date] = 0;
//                 }
//                 acc[date] += _count._all;
//                 return acc;
//             },
//             {}
//         );

//         const formattedData: UserRegistration[] = Object.keys(dateCountMap).map(
//             (date) => ({
//                 date,
//                 count: dateCountMap[date],
//             })
//         );

//         formattedData.sort(
//             (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//         );

//         revalidatePath("/dashboard");

//         return formattedData;
//     } catch (err: any) {
//         console.error("Failed to fetch user registrations:", err);
//         return err;
//     }
// }

// export async function getMentorRegistrations(): Promise<UserRegistration[]> {
//     try {
//         const userRegistrations = await prisma.user.groupBy({
//             by: ["createdAt", "role"],
//             where: {
//                 role: "MENTOR",
//             },
//             _count: {
//                 _all: true,
//             },
//             orderBy: {
//                 createdAt: "asc",
//             },
//         });

//         const dateCountMap: Record<string, number> = userRegistrations.reduce(
//             (acc: Record<string, number>, { createdAt, _count }) => {
//                 const date = createdAt!.toISOString().slice(0, 10);
//                 if (!acc[date]) {
//                     acc[date] = 0;
//                 }
//                 acc[date] += _count?._all;
//                 return acc;
//             },
//             {}
//         );

//         const formattedData: UserRegistration[] = Object.keys(dateCountMap).map(
//             (date) => ({
//                 date,
//                 count: dateCountMap[date],
//             })
//         );

//         formattedData.sort(
//             (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//         );

//         revalidatePath("/dashboard");

//         return formattedData;
//     } catch (err: any) {
//         console.error("Failed to fetch user registrations:", err);
//         return err;
//     }
// }

// export async function getMentorRequests() {
//     try {
//         const response = await prisma.user.findMany({
//             where: {
//                 role: "MENTOR",
//                 emailVerified: false,
//             },
//             select: {
//                 id: true,
//                 name: true,
//                 image: true,
//                 tagline: true,
//             },
//         });
//         console.log(response);
//         return response;
//     } catch (err: any) {
//         console.error("Failed to fetch mentor requests", err);
//         return err;
//     }
// }

// export async function getMentorDetailsById(id: any) {
//     try {
//         console.log("Id is: ", id);
//         const mentor = await prisma.user.findFirst({
//             where: { id }
//         });
//         if (!mentor) throw new Error("Mentor not found");
//         console.log("Mentor is: ", mentor);
//         return mentor;
//     } catch (err: any) {
//         console.error('Failed to fetch mentor details by id', err);
//         return err;
//     }
// }

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
        // console.log(updatedUser);
        return { success: true };
    } catch (error) {
        console.log(error);
        console.error("Error updating User:", error);
        return {
            error: "Server error",
        };
    }
};