"use client"

import { useState } from "react"
import { Shirt, TerminalIcon as Tux, ShirtIcon, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewOrder() {
    const [step, setStep] = useState(1)
    const [selectedService, setSelectedService] = useState<string | null>(null)

    const services = [
        {
            id: "regular",
            name: "Cuci Reguler",
            price: 15000,
            icon: Shirt,
            time: "24 jam",
            description: "Cuci dan pengeringan standar",
        },
        {
            id: "express",
            name: "Cuci Express",
            price: 25000,
            icon: ShirtIcon,
            time: "6 jam",
            description: "Layanan cepat",
        },
        {
            id: "dry-clean",
            name: "Dry Cleaning",
            price: 35000,
            icon: Tux,
            time: "48 jam",
            description: "Untuk kain yang sensitif",
        },
    ]

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount)
    }

    return (
        <div className="p-4 md:p-6 space-y-4">
            <h1 className="text-xl font-bold">Pesanan Baru</h1>

            {step === 1 && (
                <div className="space-y-4">
                    <p className="text-gray-500">Pilih layanan untuk melanjutkan</p>

                    <div className="space-y-3">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={service.id}
                                    className={`p-4 rounded-lg border ${selectedService === service.id ? "border-primary bg-primary/5" : "border-gray-200 bg-white"
                                        } cursor-pointer`}
                                    onClick={() => setSelectedService(service.id)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`p-2 rounded-lg ${selectedService === service.id ? "bg-primary/10" : "bg-gray-100"}`}
                                        >
                                            <Icon
                                                className={`h-5 w-5 ${selectedService === service.id ? "text-primary" : "text-gray-500"}`}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">{service.name}</h3>
                                            <p className="text-sm text-gray-500">{service.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{formatRupiah(service.price)}/item</p>
                                            <p className="text-xs text-gray-500">{service.time}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <Button className="w-full" disabled={!selectedService} onClick={() => setStep(2)}>
                        Lanjutkan
                    </Button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-primary/10 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Shirt className="h-5 w-5 text-primary" />
                            <span className="font-medium">Cuci Reguler</span>
                        </div>
                        <button className="text-sm text-primary">Ubah</button>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <h3 className="font-medium mb-3">Detail Pelanggan</h3>

                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm text-gray-500">Nama Pelanggan</label>
                                    <Input type="text" placeholder="Masukkan nama pelanggan" className="mt-1" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500">Nomor Telepon</label>
                                    <Input type="tel" placeholder="Masukkan nomor telepon" className="mt-1" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500">Alamat</label>
                                    <Input type="text" placeholder="Masukkan alamat" className="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <h3 className="font-medium mb-3">Detail Item</h3>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span>Kaos</span>
                                    <div className="flex items-center gap-3">
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            -
                                        </button>
                                        <span>2</span>
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Celana</span>
                                    <div className="flex items-center gap-3">
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            -
                                        </button>
                                        <span>1</span>
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span>Kemeja</span>
                                    <div className="flex items-center gap-3">
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            -
                                        </button>
                                        <span>3</span>
                                        <button className="h-7 w-7 rounded-full border border-gray-300 flex items-center justify-center">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full text-sm">
                                    + Tambah Item Lain
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <h3 className="font-medium mb-3">Pengambilan & Pengantaran</h3>

                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm text-gray-500">Tanggal Pengambilan</label>
                                    <Input type="date" className="mt-1" />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-500">Waktu Pengambilan</label>
                                    <Input type="time" className="mt-1" />
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" id="sameForDelivery" />
                                    <label htmlFor="sameForDelivery">
                                        Gunakan waktu pengantaran standar (24 jam setelah pengambilan)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <h3 className="font-medium mb-3">Ringkasan Pesanan</h3>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>6 Item × Rp15.000</span>
                                    <span>Rp90.000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Biaya Antar</span>
                                    <span>Rp10.000</span>
                                </div>
                                <div className="flex justify-between font-medium pt-2 border-t border-gray-100 mt-2">
                                    <span>Total</span>
                                    <span>Rp100.000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                            Kembali
                        </Button>
                        <Button className="flex-1 gap-2">
                            <Wallet className="h-4 w-4" />
                            Buat Pesanan
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

