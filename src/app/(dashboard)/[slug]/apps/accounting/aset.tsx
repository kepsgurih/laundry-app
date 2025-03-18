import { Search, Filter, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatRupiah } from "@/lib/formatRupiah"

interface FixedAsset {
    setShowAddModal: (addType: boolean) => void
    setAddType: (addType: "asset") => void
}

const fixedAssets = [
    {
        id: "asset-001",
        name: "Mesin Cuci Industrial",
        purchaseDate: "15 Jan 2022",
        initialValue: 25000000,
        currentValue: 20000000,
        depreciation: 5000000,
        location: "Toko Utama",
        status: "active",
    },
    {
        id: "asset-002",
        name: "Mesin Pengering",
        purchaseDate: "15 Jan 2022",
        initialValue: 18000000,
        currentValue: 14400000,
        depreciation: 3600000,
        location: "Toko Utama",
        status: "active",
    },
    {
        id: "asset-003",
        name: "Setrika Uap",
        purchaseDate: "20 Mar 2022",
        initialValue: 5000000,
        currentValue: 4000000,
        depreciation: 1000000,
        location: "Toko Utama",
        status: "active",
    },
    {
        id: "asset-004",
        name: "Kendaraan Pengiriman",
        purchaseDate: "10 Apr 2022",
        initialValue: 120000000,
        currentValue: 96000000,
        depreciation: 24000000,
        location: "Toko Utama",
        status: "active",
    },
    {
        id: "asset-005",
        name: "Komputer Kasir",
        purchaseDate: "05 Jun 2022",
        initialValue: 8000000,
        currentValue: 5600000,
        depreciation: 2400000,
        location: "Toko Utama",
        status: "active",
    },
]


export default function Aset({ setShowAddModal, setAddType }: FixedAsset) {

    return (
        <TabsContent value="assets" className="space-y-4">
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input type="search" placeholder="Cari aset..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex justify-end">
                <Button
                    onClick={() => {
                        setShowAddModal(true)
                        setAddType("asset")
                    }}
                    className="gap-1"
                >
                    <Plus className="h-4 w-4" />
                    <span>Tambah Aset Baru</span>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Ringkasan Aset</CardTitle>
                    <CardDescription>
                        Total nilai aset: {formatRupiah(fixedAssets.reduce((sum, asset) => sum + asset.currentValue, 0))}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-auto max-h-[500px]">
                        <div className="rounded-md border">
                            <table className="w-full">
                                <thead className="sticky top-0 bg-white">
                                    <tr className="border-b bg-muted/50">
                                        <th className="p-3 text-left text-sm font-medium">Nama Aset</th>
                                        <th className="p-3 text-left text-sm font-medium">Tanggal Beli</th>
                                        <th className="p-3 text-left text-sm font-medium">Nilai Awal</th>
                                        <th className="p-3 text-left text-sm font-medium">Nilai Saat Ini</th>
                                        <th className="p-3 text-left text-sm font-medium">Penyusutan</th>
                                        <th className="p-3 text-left text-sm font-medium">Lokasi</th>
                                        <th className="p-3 text-left text-sm font-medium">Tindakan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fixedAssets.map((asset) => (
                                        <tr key={asset.id} className="border-b">
                                            <td className="p-3 text-sm">{asset.name}</td>
                                            <td className="p-3 text-sm">{asset.purchaseDate}</td>
                                            <td className="p-3 text-sm">{formatRupiah(asset.initialValue)}</td>
                                            <td className="p-3 text-sm">{formatRupiah(asset.currentValue)}</td>
                                            <td className="p-3 text-sm">{formatRupiah(asset.depreciation)}</td>
                                            <td className="p-3 text-sm">{asset.location}</td>
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