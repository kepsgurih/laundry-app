"use client"

import { useState } from "react"
import { Search, Filter, ArrowUpDown, CheckCircle, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Orders() {
    const [filterStatus, setFilterStatus] = useState("all")

    const orders = [
        {
            id: "LD-2023-0548",
            customer: "Emma Wilson",
            phone: "(555) 123-4567",
            date: "Hari ini, 10:30",
            items: 8.6,
            type: 'kilo',
            service: "Cuci Express",
            status: "new",
            amount: 325000,
            dueDate: "Hari ini, 17:00",
        },
        {
            id: "LD-2023-0547",
            customer: "Michael Brown",
            phone: "(555) 234-5678",
            date: "Hari ini, 09:15",
            items: 5,
            type: 'pcs',
            service: "Dry Clean",
            status: "new",
            amount: 457500,
            dueDate: "Besok, 12:00",
        },
        {
            id: "LD-2023-0546",
            customer: "Sophia Martinez",
            phone: "(555) 345-6789",
            date: "Kemarin, 16:20",
            items: 12,
            type: 'pcs',
            service: "Cuci Reguler",
            status: "processing",
            amount: 249900,
            dueDate: "Besok, 16:00",
        },
        {
            id: "LD-2023-0545",
            customer: "James Johnson",
            phone: "(555) 456-7890",
            date: "Kemarin, 14:30",
            items: 3,
            type: 'pcs',
            service: "Setrika Saja",
            status: "ready",
            amount: 150000,
            dueDate: "Hari ini, 15:00",
        },
        {
            id: "LD-2023-0544",
            customer: "Olivia Davis",
            phone: "(555) 567-8901",
            date: "15 Okt 2023",
            items: 7,
            type: 'pcs',
            service: "Cuci Reguler",
            status: "completed",
            amount: 225000,
            dueDate: "16 Okt 2023",
        },
    ]

    const filteredOrders = filterStatus === "all" ? orders : orders.filter((order) => order.status === filterStatus)

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "new":
                return (
                    <div className="flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        <Clock className="h-3 w-3" />
                        <span>Baru</span>
                    </div>
                )
            case "processing":
                return (
                    <div className="flex items-center gap-1 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                        <Clock className="h-3 w-3" />
                        <span>Diproses</span>
                    </div>
                )
            case "ready":
                return (
                    <div className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        <span>Siap</span>
                    </div>
                )
            case "completed":
                return (
                    <div className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                        <CheckCircle className="h-3 w-3" />
                        <span>Selesai</span>
                    </div>
                )
            default:
                return null
        }
    }

    const getActionButton = (status: string) => {
        switch (status) {
            case "new":
                return (
                    <Button size="sm" className="w-full">
                        Mulai Proses
                    </Button>
                )
            case "processing":
                return (
                    <Button size="sm" className="w-full">
                        Tandai Siap
                    </Button>
                )
            case "ready":
                return (
                    <Button size="sm" variant="outline" className="w-full">
                        Tandai Terkirim
                    </Button>
                )
            case "completed":
                return (
                    <Button size="sm" variant="outline" className="w-full">
                        Lihat Detail
                    </Button>
                )
            default:
                return null
        }
    }

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
            <h1 className="text-xl font-bold">Pesanan Pelanggan</h1>

            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Cari berdasarkan ID atau pelanggan..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4">
                    <TabsTrigger value="all" onClick={() => setFilterStatus("all")}>
                        Semua
                    </TabsTrigger>
                    <TabsTrigger value="new" onClick={() => setFilterStatus("new")}>
                        Baru
                    </TabsTrigger>
                    <TabsTrigger value="processing" onClick={() => setFilterStatus("processing")}>
                        Diproses
                    </TabsTrigger>
                    <TabsTrigger value="ready" onClick={() => setFilterStatus("ready")}>
                        Siap
                    </TabsTrigger>
                    <TabsTrigger value="completed" onClick={() => setFilterStatus("completed")}>
                        Selesai
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{order.id}</h3>
                                        {getStatusBadge(order.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {order.customer} • {order.phone}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatRupiah(order.amount)}</p>
                                    <p className="text-xs text-gray-500">Diterima: {order.date}</p>
                                </div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div>
                                    <p>
                                        {order.service} • {order.items} {order.type === 'pcs' ? 'pcs' : 'kg'}
                                    </p>
                                    <p className="text-xs mt-1">Jatuh tempo: {order.dueDate}</p>
                                </div>
                                <div className="w-28">{getActionButton(order.status)}</div>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="new" className="space-y-3">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{order.id}</h3>
                                        {getStatusBadge(order.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {order.customer} • {order.phone}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatRupiah(order.amount)}</p>
                                    <p className="text-xs text-gray-500">Diterima: {order.date}</p>
                                </div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div>
                                    <p>
                                        {order.service} • {order.items} item
                                    </p>
                                    <p className="text-xs mt-1">Jatuh tempo: {order.dueDate}</p>
                                </div>
                                <div className="w-28">{getActionButton(order.status)}</div>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="processing" className="space-y-3">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{order.id}</h3>
                                        {getStatusBadge(order.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {order.customer} • {order.phone}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatRupiah(order.amount)}</p>
                                    <p className="text-xs text-gray-500">Diterima: {order.date}</p>
                                </div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div>
                                    <p>
                                        {order.service} • {order.items} item
                                    </p>
                                    <p className="text-xs mt-1">Jatuh tempo: {order.dueDate}</p>
                                </div>
                                <div className="w-28">{getActionButton(order.status)}</div>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="ready" className="space-y-3">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{order.id}</h3>
                                        {getStatusBadge(order.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {order.customer} • {order.phone}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatRupiah(order.amount)}</p>
                                    <p className="text-xs text-gray-500">Diterima: {order.date}</p>
                                </div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div>
                                    <p>
                                        {order.service} • {order.items} item
                                    </p>
                                    <p className="text-xs mt-1">Jatuh tempo: {order.dueDate}</p>
                                </div>
                                <div className="w-28">{getActionButton(order.status)}</div>
                            </div>
                        </div>
                    ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-3">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-medium">{order.id}</h3>
                                        {getStatusBadge(order.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {order.customer} • {order.phone}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{formatRupiah(order.amount)}</p>
                                    <p className="text-xs text-gray-500">Diterima: {order.date}</p>
                                </div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div>
                                    <p>
                                        {order.service} • {order.items} item
                                    </p>
                                    <p className="text-xs mt-1">Jatuh tempo: {order.dueDate}</p>
                                </div>
                                <div className="w-28">{getActionButton(order.status)}</div>
                            </div>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )
}

