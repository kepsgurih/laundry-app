// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { type DefaultSession, type DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }

  interface JWT {
    id: string
    sub?: string
  }

  interface User extends DefaultUser {
    id: string
  }
}
