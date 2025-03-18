"use client"

import type React from "react"

import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { Route } from "next"
import { usePathname } from "next/navigation"

interface NavItem {
    url: string
    label: string
    icon: React.ElementType
}

interface BottomNavProps {
    navItems: NavItem[]
}

export default function BottomNav({ navItems }: BottomNavProps) {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-slate-200 rounded-t-lg shadow-lg">
            <div className="flex justify-between items-center px-6 py-2 max-w-md mx-auto relative">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isNewButton = item.url === "/apps/new-order"

                    if (isNewButton) {
                        return (
                            <Link
                                key={item.url}
                                className="relative flex flex-col items-center justify-center -mt-10"
                                href={item.url as Route<string>}
                            >
                                <div className="bg-primary rounded-full p-3 shadow-md">
                                    <PlusCircle className="h-6 w-6 text-primary fill-white" />
                                </div>
                            </Link>
                        )
                    }

                    return (
                        <Link
                            key={item.url}
                            className="flex flex-col items-center justify-center"
                            href={item.url as Route<string>}
                        >
                            <div className="flex items-center justify-center p-1">
                                <Icon
                                    className={`h-5 w-5 ${pathname.includes(item.url) ? "text-primary" : "text-gray-400"}`}
                                    strokeWidth={pathname.includes(item.url) ? 2.5 : 1.5}
                                />
                            </div>
                            <span className={`text-xs mt-0.5 ${pathname.includes(item.url) ? "text-primary font-medium" : "text-gray-500"}`}>
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

