import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { formatRupiah } from "@/lib/formatRupiah"

const revenue = [
    {
        id: "rev-001",
        source: "Layanan Cuci",
        amount: 8500000,
        date: "31 Okt 2023",
        details: "Cuci Reguler",
    },
    {
        id: "rev-002",
        source: "Layanan Cuci",
        amount: 6200000,
        date: "31 Okt 2023",
        details: "Cuci Express",
    },
    {
        id: "rev-003",
        source: "Layanan Cuci",
        amount: 4800000,
        date: "31 Okt 2023",
        details: "Dry Clean",
    },
    {
        id: "rev-004",
        source: "Layanan Tambahan",
        amount: 1500000,
        date: "31 Okt 2023",
        details: "Setrika",
    },
    {
        id: "rev-005",
        source: "Layanan Tambahan",
        amount: 800000,
        date: "31 Okt 2023",
        details: "Antar-Jemput",
    },
]

export default function RevenueAccounting() {
    return (
        <TabsContent value="revenue" className="space-y-4">
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Cari pendapatan..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Pendapatan</CardTitle>
                    <CardDescription>
                        Total pendapatan: {formatRupiah(revenue.reduce((sum: number, rev: { amount: number}) => sum + rev.amount, 0))}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-auto max-h-[500px]">
                        <div className="rounded-md border">
                            <table className="w-full">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b bg-muted/50">
                                        <th className="p-3 text-left text-sm font-medium">Sumber</th>
                                        <th className="p-3 text-left text-sm font-medium">Detail</th>
                                        <th className="p-3 text-left text-sm font-medium">Jumlah</th>
                                        <th className="p-3 text-left text-sm font-medium">Tanggal</th>
                                        <th className="p-3 text-left text-sm font-medium">Tindakan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revenue.map((rev) => (
                                        <tr key={rev.id} className="border-b">
                                            <td className="p-3 text-sm">{rev.source}</td>
                                            <td className="p-3 text-sm">{rev.details}</td>
                                            <td className="p-3 text-sm">{formatRupiah(rev.amount)}</td>
                                            <td className="p-3 text-sm">{rev.date}</td>
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