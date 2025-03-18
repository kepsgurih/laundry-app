"use client"

import { Home, Package, PlusCircle, User, DollarSign } from "lucide-react"
import BottomNav from "@/components/bottom-nav"
import Sidebar from "@/components/sidebar"

function Template({ children }: { children: React.ReactNode }) {
    const navItems = [
        { url: "/apps/home", label: "Home", icon: Home },
        { url: "/apps/orders", label: "Pesanan", icon: Package },
        { url: "/apps/new-order", label: "Baru", icon: PlusCircle },
        { url: "/apps/accounting", label: "Akuntasi", icon: DollarSign },
        { url: "/apps/profile", label: "Profil", icon: User },
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar for large screens */}
            <Sidebar navItems={navItems} />

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-auto pb-16 md:pb-0">
                    {children}
                </main>

                {/* Bottom navigation for small screens */}
                <BottomNav navItems={navItems} />
            </div>
        </div>
    )
}

export default Template
