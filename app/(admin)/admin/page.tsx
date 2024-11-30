import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AdminDashbaord() {
    const { data: session, status } = useSession();

    if (!session || session?.user?.role !== 'Admin') {
        redirect('/signin');
    }
    return (
        <div className="py-20">
            <h1>Admin Dashboard</h1>
        </div>
    )
}