import { getCareersApplications } from "@/actions/admin.action"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

interface User {
    name: string
    skill: string
    yearOfStudy: string
    email: string
    details: string
}
export default async function UserTable() {
    const usersCareersApplications = await getCareersApplications();

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">Careers Applications</h1>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S.N.</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>GitHub</TableHead>
                            <TableHead>LinkedIn</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Cover Letter</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            usersCareersApplications && usersCareersApplications.map((application, index: number) => (
                                <TableRow key={application.email}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className="font-medium">{application.name}</TableCell>
                                    <TableCell>{application.email}</TableCell>
                                    <TableCell>
                                        <Link href={application.github} target="_blank" className="cursor-pointer">
                                            {application.github}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={application.linkedin} target="_blank" className="cursor-pointer">
                                            {application.linkedin}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{application.position}</TableCell>
                                    <TableCell>{application.coverletter}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

