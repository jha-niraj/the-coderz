import { LayoutDashboard, User, Users2 } from "lucide-react";

// Layout for the Admin Dashboard
export const adminSidebar = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        variant: "default",
        path: "/dashboard"
    },
    {
        name: "Users",
        icon: Users2,
        variant: "ghost",
        path: "/users"
    },
]