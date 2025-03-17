import { Button } from "@/components/ui/button";

export default function Highlight() {
    return (
        <div>
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Pesanan yang Perlu Perhatian</h2>
                <button className="text-primary text-sm">Lihat Semua</button>
            </div>
            <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-l-red-500 border-t border-r border-b border-gray-100">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3">
                            <h3 className="font-medium">#LD-2023-0542</h3>
                            <p className="text-sm text-gray-500">Cuci Express • 8 Item • Jatuh tempo dalam 3 jam</p>
                        </div>
                        <Button size="sm" className="text-xs">
                            Proses
                        </Button>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-l-green-500 border-t border-r border-b border-gray-100">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-3">
                            <h3 className="font-medium">#LD-2023-0542</h3>
                            <p className="text-sm text-gray-500">Cuci Express • 8 Item • Jatuh tempo dalam 3 jam</p>
                        </div>
                        <Button size="sm" className="text-xs">
                            Proses
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}