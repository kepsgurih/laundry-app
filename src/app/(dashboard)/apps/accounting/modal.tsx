import { useState } from "react"
import { Building2, Wallet, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ModalAsetProps {
    showAddModal: boolean
    setShowAddModal: (value: boolean) => void
    addType: string
    setAddType: (value: string) => void
}


export default function ModalAccounting({ showAddModal, setShowAddModal, addType, setAddType }: any) {
    const [frequency, setFrequency] = useState<"daily" | "monthly">("monthly")
    if (!showAddModal) return null
    else {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">
                            {addType === ""
                                ? "Pilih Jenis Data"
                                : addType === "asset"
                                    ? "Tambah Aset Tetap"
                                    : "Tambah Biaya Operasional"}
                        </h2>
                        <button
                            onClick={() => {
                                setShowAddModal(false)
                                setAddType("")
                            }}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {addType === "" ? (
                        <div className="space-y-4">
                            <Button onClick={() => setAddType("asset")} className="w-full justify-start text-left h-auto py-4 bg-primary/10 group hover:bg-primary/20">
                                <Building2 className="h-5 w-5 mr-3 text-primary group-hover:text-slate-900" />
                                <div>
                                    <div className="font-medium text-primary group-hover:text-slate-900">Aset Tetap</div>
                                    <div className="text-xs text-muted-foreground">Tambahkan mesin, kendaraan, atau aset lainnya</div>
                                </div>
                            </Button>

                            <Button onClick={() => setAddType("expense")} className="w-full justify-start text-left h-auto py-4 bg-primary/10 group hover:bg-primary/20">
                                <Wallet className="h-5 w-5 mr-3 text-primary group-hover:text-slate-900" />
                                <div>
                                    <div className="font-medium text-primary group-hover:text-slate-900">Biaya Operasional</div>
                                    <div className="text-xs text-muted-foreground">Catat pengeluaran harian atau bulanan</div>
                                </div>
                            </Button>
                        </div>
                    ) : addType === "asset" ? (
                        <ScrollArea className="h-80">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nama Aset</label>
                                    <Input placeholder="Contoh: Mesin Cuci Industrial" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Nilai Aset (Rp)</label>
                                    <Input type="number" placeholder="Contoh: 25000000" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Tanggal Pembelian</label>
                                    <Input type="date" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Lokasi</label>
                                    <Input placeholder="Contoh: Toko Utama" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Masa Pakai (Tahun)</label>
                                    <Input type="number" placeholder="Contoh: 5" />
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={() => {
                                            setAddType("")
                                            setShowAddModal(false)
                                        }}
                                    >
                                        Batal
                                    </Button>
                                    <Button className="flex-1">Simpan Aset</Button>
                                </div>
                            </div>
                        </ScrollArea>
                    ) : (
                        <ScrollArea className="h-80">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Kategori Biaya</label>
                                    <select className="w-full p-2 border rounded-md">
                                        <option value="">Pilih Kategori</option>
                                        <option value="utilities">Utilitas</option>
                                        <option value="salary">Gaji</option>
                                        <option value="rent">Sewa</option>
                                        <option value="materials">Bahan</option>
                                        <option value="marketing">Pemasaran</option>
                                        <option value="transportation">Transportasi</option>
                                        <option value="other">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Deskripsi</label>
                                    <Input placeholder="Contoh: Tagihan Listrik" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Jumlah (Rp)</label>
                                    <Input type="number" placeholder="Contoh: 2500000" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Tanggal</label>
                                    <Input type="date" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Frekuensi</label>
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            variant={frequency === "daily" ? "default" : "outline"}
                                            className="flex-1"
                                            onClick={() => setFrequency("daily")}
                                        >
                                            Harian
                                        </Button>
                                        <Button
                                            type="button"
                                            variant={frequency === "monthly" ? "default" : "outline"}
                                            className="flex-1"
                                            onClick={() => setFrequency("monthly")}
                                        >
                                            Bulanan
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={() => {
                                            setAddType("")
                                            setShowAddModal(false)
                                        }}
                                    >
                                        Batal
                                    </Button>
                                    <Button className="flex-1">Simpan Biaya</Button>
                                </div>
                            </div>
                        </ScrollArea>
                    )}
                </div>
            </div>
        )
    }
}