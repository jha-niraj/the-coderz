import { getSubmittedContacts } from "@/actions/admin.action"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface User {
    name: string
    skill: string
    yearOfStudy: string
    email: string
    details: string
}
// const users: User[] = [
//     {
//         name: 'Alice Johnson',
//         skill: 'Web Development',
//         yearOfStudy: '3rd',
//         email: 'alice@example.com',
//         details: 'Specializes in React and Node.js',
//     },
//     {
//         name: 'Bob Smith',
//         skill: 'Data Science',
//         yearOfStudy: '2nd',
//         email: 'bob@example.com',
//         details: 'Proficient in Python and Machine Learning',
//     },
//     {
//         name: 'Charlie Brown',
//         skill: 'UI/UX Design',
//         yearOfStudy: '4th',
//         email: 'charlie@example.com',
//         details: 'Expert in Figma and Adobe XD',
//     },
//     {
//         name: 'Diana Ross',
//         skill: 'Mobile Development',
//         yearOfStudy: '3rd',
//         email: 'diana@example.com',
//         details: 'Specializes in React Native and Flutter',
//     },
//     {
//         name: 'Ethan Hunt',
//         skill: 'Cybersecurity',
//         yearOfStudy: '1st',
//         email: 'ethan@example.com',
//         details: 'Interested in network security and ethical hacking',
//     },
// ]

export async function UserTable() {
    const usersContactResponse = await getSubmittedContacts();
    console.log(usersContactResponse);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-5">User Information</h1>
            <div className="rounded-md border">
                <Table>
                    <TableCaption>A list of users and their details.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Skill</TableHead>
                            <TableHead>Year of Study</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    {/* <TableBody>
                        {
                            users.map((user) => (
                                <TableRow key={user.email}>
                                    <TableCell className="font-medium">{user.name}</TableCell>
                                    <TableCell>{user.skill}</TableCell>
                                    <TableCell>{user.yearOfStudy}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.details}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody> */}
                </Table>
            </div>
        </div>
    )
}

