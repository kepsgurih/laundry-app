"use client"

import { useState } from "react"
import { Calendar, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Aset from "./aset"
import ModalAccounting from "./modal"
import OverviewAccounting from "./overview"
import ExpenseAccounting from "./expense"
import RevenueAccounting from "./revenue"

export default function Accounting() {
    const [, setActiveTab] = useState("overview")
    const [showAddModal, setShowAddModal] = useState(false)
    const [addType, setAddType] = useState<"asset" | "expense" | "">("")

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex flex-col md:flex-row justify-between">
                <h1 className="text-2xl font-bold">Akuntansi</h1>
                <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Oktober 2023</span>
                    </Button>
                    <Button size="sm" onClick={() => setShowAddModal(true)}>
                        <Plus className="h-4 w-4 mr-1" />
                        <span>Tambah Baru</span>
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="overview">Ringkasan</TabsTrigger>
                    <TabsTrigger value="assets">Aset</TabsTrigger>
                    <TabsTrigger value="expenses">Operasional</TabsTrigger>
                    <TabsTrigger value="revenue">Pendapatan</TabsTrigger>
                </TabsList>
                <OverviewAccounting />
                <Aset setShowAddModal={setShowAddModal} setAddType={setAddType} />
                <ExpenseAccounting setShowAddModal={setShowAddModal} setAddType={setAddType} />
                <RevenueAccounting />
            </Tabs>

            <ModalAccounting showAddModal={showAddModal} setShowAddModal={setShowAddModal} addType={addType} setAddType={setAddType} />
        </div>
    )
}

