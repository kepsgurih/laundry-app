"use client"

import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { registerSchema } from "@/lib/zod"
import { z } from "zod"

export default function Page() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      retype: ''
    },
  })

  async function onSubmit(input: z.infer<typeof registerSchema>) {
    if (input.password !== input.retype) {
      toast.error("Password tidak cocok")
      return
    }
    if (input.name === "" || input.email === "" || input.password === "" || input.retype === "") {
      toast.error("Semua field harus diisi")
      return
    }
    try {
      setLoading(true)
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          password: input.password,
        }),
      })

      if (!res.ok) {
        const { message } = await res.json()
        throw new Error(message || "Registrasi gagal")
      }
      toast.success("Registrasi berhasil")
      const response = await signIn('credentials', {
        email: input.email,
        password: input.password,
        redirect: false
      })

      if (response?.error) {
        toast.error(response.error);
      } else {
        router.push("/apps");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Terjadi kesalahan")
    } finally {
      setLoading(false)
    }

  }


  return (
    <div className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Kevin Krisma" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="keps@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="*******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="retype"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Masukan Ulang Password</FormLabel>
                <FormControl>
                  <Input placeholder="*******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Daftar"}</Button>
        </form>
      </Form>
      <div className="text-center text-sm">
        Belum punya akun?{" "}
        <Link href='/register' className="underline underline-offset-4">
          Daftar disini
        </Link>
      </div>
    </div>
  )
}
