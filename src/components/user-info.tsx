import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"

export default async function UserInfo() {
    const session = await getServerSession(authOptions)
    return (
        <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
            <Image src={session && session.user.avatar ? session.user.avatar : "/globe.svg"} alt="User" width={30} height={30} className="rounded-full" unoptimized={true} />
                <div>
                    <p className="font-medium">{session?.user.name}</p>
                    <p className="text-xs text-gray-500">{session?.user.email}</p>
                </div>
            </div>
        </div>
    )
}