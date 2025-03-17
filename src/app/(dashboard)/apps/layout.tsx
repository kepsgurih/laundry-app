import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Layout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return children
}
