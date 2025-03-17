import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(6, { message: 'Password minimal 6 karakter' }),
})

export const registerSchema = z.object({
    name: z.string().min(3, { message: 'Nama minimal 3 karakter' }),
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(6, { message: 'Password minimal 6 karakter' }),
    retype: z.string().min(6, { message: 'Password minimal 6 karakter' }),
})