"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { organizationSchema } from "@/lib/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateOrganizationPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof organizationSchema>>({
        resolver: zodResolver(organizationSchema),
        defaultValues: {
            name: "",
            address: {
                street: "",
                city: "",
                state: "",
                zip: "",
            },
        },
    });

    async function onSubmit(input: z.infer<typeof organizationSchema>) {
        try {
            setLoading(true);
            const res = await fetch("/api/v1/organization", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });

            if (!res.ok) {
                const { message } = await res.json();
                throw new Error(message || "Gagal membuat organisasi");
            }
            toast.success("Organisasi berhasil dibuat");
            router.push("/dashboard");
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "Terjadi kesalahan");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <Card className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl">Mulai dengan Grup</CardTitle>
                    <CardDescription>
                        Sebelum mulai pakai sistem laundry, yuk buat grup dulu! Dengan grup ini, kamu bisa mengelola usaha laundry-mu lebih gampang dan rapi. 🚀
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nama Organisasi</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nama organisasi" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address.street"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Alamat</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jalan" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address.city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Kota</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Kota" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address.state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Provinsi</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Provinsi" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address.zip"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Kode Pos</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Kode pos" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={loading}>{loading ? "Loading..." : "Buat Organisasi"}</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>

    );
}