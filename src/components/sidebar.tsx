"use client"

import type React from "react"

import { Shirt } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Route } from "next"
import UserInfo from "./user-info"

interface NavItem {
    url: string
    label: string
    icon: React.ElementType
}

interface SidebarProps {
    navItems: NavItem[]
}

export default function Sidebar({ navItems }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex md:flex-col md:w-64 bg-primary/10 border-r border-gray-200 h-screen">
            {/* Logo and app name */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-200">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <Shirt className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h1 className="font-bold text-lg">LaundryApp</h1>
                    <p className="text-xs text-gray-500">Management System</p>
                </div>
            </div>

            {/* Navigation items */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <li key={item.url}>
                                <Link
                                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${pathname.includes(item.url) ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-primary/50 hover:text-white"
                                        }`}
                                    href={item.url as Route<string>}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <UserInfo />
        </div>
    )
}

