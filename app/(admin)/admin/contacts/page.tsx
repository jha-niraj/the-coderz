import { getSubmittedContacts } from "@/actions/admin.action"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface User {
    name: string
    skill: string
    yearOfStudy: string
    email: string
    details: string
}
export default async function UserTable() {
    const usersContactResponse = await getSubmittedContacts();

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">User Information</h1>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S.N.</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Skill</TableHead>
                            <TableHead>Year of Study</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            usersContactResponse && usersContactResponse.map((contact, index: number) => (
                                <TableRow key={contact.email}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className="font-medium">{contact.name}</TableCell>
                                    <TableCell>{contact.skill}</TableCell>
                                    <TableCell>{contact.yearofstudy}</TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.details}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

