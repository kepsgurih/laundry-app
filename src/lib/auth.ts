import { AuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma"; // Sesuaikan dengan lokasi Prisma client

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password wajib diisi");
        }

        // Cek apakah user ada di database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("User tidak ditemukan");
        }

        // Verifikasi password
        const isValidPassword = await compare(credentials.password, user.password ?? "");
        if (!isValidPassword) {
          throw new Error("Password salah");
        }

        return {
          id: user.id,
          name: user.name ?? "Unknown",
          email: user.email,
          avatar: user.avatar ?? '',
          roles: user.roles,
          groupId: user.groupId ?? "",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.avatar = user.avatar;
        token.email = user.email;
        token.roles = user.roles;
        token.groupId = user.groupId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.avatar = token.avatar as string;
        session.user.email = token.email as string;
        session.user.roles = token.roles as string;
        session.user.groupId = token.groupId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Sesuaikan dengan halaman login
  },
};

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
