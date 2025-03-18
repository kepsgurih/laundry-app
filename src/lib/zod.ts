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

export const addressSchema = z.object({
    street: z.string().min(3, { message: "Jalan minimal 3 karakter" }),
    city: z.string().min(2, { message: "Kota minimal 2 karakter" }),
    state: z.string().min(2, { message: "Provinsi minimal 2 karakter" }),
    zip: z.string().regex(/^\d{5}$/, { message: "Kode pos harus 5 digit" }),
});

export const organizationSchema = z.object({
    name: z.string().min(3, { message: "Nama minimal 3 karakter" }),
    address: addressSchema.optional(),
});