import { Sidebar } from "./_components/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen py-20">
            {/* Sidebar for larger screens */}
            <aside className="hidden w-48 lg:block">
                <Sidebar className="border-r" />
            </aside>

            {/* Sheet for smaller screens */}
            <Sheet>
                <SheetTrigger asChild>
                    <button className="fixed left-4 top-16 z-40 rounded-md bg-gray-800 p-2 text-white lg:hidden">
                        <Menu className="h-6 w-6" />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    <Sidebar />
                </SheetContent>
            </Sheet>

            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto py-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

