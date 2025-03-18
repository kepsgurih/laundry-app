// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { type DefaultSession, type DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string
      email?: string
      avatar?: string
      roles?: string
      groupId?: string
    } & DefaultSession["user"]
  }

  interface token {
    id: string
    name?: string
    email?: string
    avatar?: string
    roles?: string
    groupId?: string
  }

  interface JWT {
    id: string
    sub?: string
    name?: string
    email?: string
    avatar?: string
    roles?: string
    groupId?: string
  }

  interface User extends DefaultUser {
    id: string
    name?: string
    email?: string
    avatar?: string
    roles?: string
    groupId?: string
  }
}
