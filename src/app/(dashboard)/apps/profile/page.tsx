"use client"
import { User, Settings, CreditCard, Bell, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default function Page() {
    const menuItems = [
        { icon: User, label: "Personal Information", href: "#" },
        { icon: CreditCard, label: "Payment Methods", href: "#" },
        { icon: Bell, label: "Notifications", href: "#" },
        { icon: Settings, label: "App Settings", href: "#" },
        { icon: HelpCircle, label: "Help & Support", href: "#" },
    ]

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xl font-medium">JD</span>
                </div>
                <div>
                    <h1 className="text-xl font-bold">John Doe</h1>
                    <p className="text-gray-500">john.doe@example.com</p>
                </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-medium">Premium Member</h3>
                        <p className="text-sm text-gray-600">Valid until Dec 31, 2023</p>
                    </div>
                    <Button size="sm">Renew</Button>
                </div>
            </div>

            <div className="space-y-1">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <a key={item.label} href={item.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
                            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <Icon className="h-4 w-4 text-gray-600" />
                            </div>
                            <span className="font-medium">{item.label}</span>
                        </a>
                    )
                })}
            </div>

            <div className="pt-6 border-t border-gray-200">
                <button onClick={() => signOut({ callbackUrl: '/login' })} className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50 w-full">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                        <LogOut className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>

            <div className="text-center text-xs text-gray-400 pt-4">
                <p>Laundry App v1.0.0</p>
                <p>© 2023 Laundry Services Inc.</p>
            </div>
        </div>
    )
}

