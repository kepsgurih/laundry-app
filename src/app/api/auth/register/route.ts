import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                avatar: `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${email}`,
                roles: "admin",
            }
        })

        return NextResponse.json({ message: "User berhasil dibuat", user: newUser });
    } catch (error) {
        console.log(error);
        if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json({ error: "Gagal register" }, { status: 500 });
    }
}
