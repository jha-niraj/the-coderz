import PageTitle from "@/app/(admin)/admindashboard/_components/pagetitle";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMenteeDetails } from "@/actions/admin.actions";
import MenteeDropdownColumn from "../_components/userdropdown";

interface MenteeProps {
    name: string,
    email: string,
    interestedIn: string
}

const MenteePage = async () => {
    const users = await getMenteeDetails("MENTEE");
    console.log(users);
    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-grow overflow-hidden">
                <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                    <div className="p-4 md:p-6 border-b">
                        <PageTitle title="Mentees" />
                    </div>
                    <div className="flex-grow overflow-auto" style={{ overflowX: 'auto' }}>
                        <style>
                            {`
                                .overflow-auto::-webkit-scrollbar {
                                    width: 0;
                                    background: transparent;
                                }
                            `}
                        </style>
                        <div className="inline-block min-w-full align-middle h-full">
                            <Table className="border-2 border-gray-150">
                                <TableHeader className="sticky top-0 bg-white z-10">
                                    <TableRow>
                                        <TableHead className="w-[50px]">Id</TableHead>
                                        <TableHead className="w-[200px]">Full Name</TableHead>
                                        <TableHead className="w-[250px]">Email</TableHead>
                                        <TableHead className="w-[200px]">Interested In</TableHead>
                                        <TableHead className="w-[100px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                    users && users.length > 0 && users.map((user: any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{index + 1}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.interestedIn || "Not Selected"}</TableCell>
                                            <TableCell>
                                                <MenteeDropdownColumn id={user.id} />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenteePage;