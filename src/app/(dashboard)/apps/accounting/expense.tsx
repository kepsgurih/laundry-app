import { Search, Filter, Building2, Wallet, TrendingUp, Calendar, Plus, X, Scroll } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatRupiah } from "@/lib/formatRupiah"


const operationalCosts = [
    {
        id: "exp-001",
        category: "Utilitas",
        description: "Listrik",
        amount: 2500000,
        date: "05 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-002",
        category: "Utilitas",
        description: "Air",
        amount: 1800000,
        date: "05 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-003",
        category: "Gaji",
        description: "Gaji Karyawan",
        amount: 15000000,
        date: "01 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-004",
        category: "Sewa",
        description: "Sewa Bangunan",
        amount: 5000000,
        date: "01 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-005",
        category: "Bahan",
        description: "Deterjen & Bahan Kimia",
        amount: 3500000,
        date: "10 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-006",
        category: "Pemasaran",
        description: "Iklan Online",
        amount: 1000000,
        date: "12 Okt 2023",
        status: "paid",
    },
    {
        id: "exp-007",
        category: "Transportasi",
        description: "Bahan Bakar",
        amount: 1200000,
        date: "15 Okt 2023",
        status: "paid",
    },
]


export default function ExpenseAccounting({ setShowAddModal, setAddType }: { setShowAddModal: (value: boolean) => void, setAddType: (value: "expense") => void }) {
    return (
        <TabsContent value="expenses" className="space-y-4">
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Cari biaya..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex justify-end">
                <Button
                    onClick={() => {
                        setShowAddModal(true)
                        setAddType("expense")
                    }}
                    className="gap-1"
                >
                    <Plus className="h-4 w-4" />
                    <span>Tambah Biaya Baru</span>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Biaya Operasional</CardTitle>
                    <CardDescription>
                        Total biaya: {formatRupiah(operationalCosts.reduce((sum, cost) => sum + cost.amount, 0))}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-auto max-h-[500px]">
                        <div className="rounded-md border">
                            <table className="w-full">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b bg-muted/50">
                                        <th className="p-3 text-left text-sm font-medium">Kategori</th>
                                        <th className="p-3 text-left text-sm font-medium">Deskripsi</th>
                                        <th className="p-3 text-left text-sm font-medium">Jumlah</th>
                                        <th className="p-3 text-left text-sm font-medium">Tanggal</th>
                                        <th className="p-3 text-left text-sm font-medium">Status</th>
                                        <th className="p-3 text-left text-sm font-medium">Tindakan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {operationalCosts.map((cost) => (
                                        <tr key={cost.id} className="border-b">
                                            <td className="p-3 text-sm">{cost.category}</td>
                                            <td className="p-3 text-sm">{cost.description}</td>
                                            <td className="p-3 text-sm">{formatRupiah(cost.amount)}</td>
                                            <td className="p-3 text-sm">{cost.date}</td>
                                            <td className="p-3 text-sm">
                                                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                                    {cost.status === "paid" ? "Dibayar" : "Belum Dibayar"}
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm">
                                                <Button variant="outline" size="sm">
                                                    Detail
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}