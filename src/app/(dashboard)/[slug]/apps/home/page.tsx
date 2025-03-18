import { DollarSign, Users, TrendingUp, Package, Clock } from 'lucide-react'
import Highlight from './highlight'

const Page = () => {
    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Beranda</h1>
                    <p className="text-gray-500">Selamat datang kembali, Admin</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium">AD</span>
                </div>
            </div>

            {/* Business Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/10 rounded-xl p-4 shadow-md">
                    <div className="flex justify-between">
                        <div className="bg-blue-300 p-2 rounded-lg">
                            <DollarSign className="h-6 w-6 text-blue-100" />
                        </div>
                        <span className="text-lg font-bold">Rp1.240K</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Pendapatan Hari Ini</p>
                    <div className="flex items-center text-green-500 text-xs mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>+12% dari kemarin</span>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-4 shadow-md">
                    <div className="flex justify-between">
                        <div className="bg-green-300 p-2 rounded-lg">
                            <Package className="h-6 w-6 text-green-100" />
                        </div>
                        <span className="text-lg font-bold">24</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Pesanan Baru</p>
                    <div className="flex items-center text-green-500 text-xs mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>+5 dari kemarin</span>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-4 shadow-md">
                    <div className="flex justify-between">
                        <div className="bg-purple-300 p-2 rounded-lg">
                            <Clock className="h-6 w-6 text-purple-100" />
                        </div>
                        <span className="text-lg font-bold">18</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Sedang Diproses</p>
                    <div className="flex items-center text-gray-400 text-xs mt-1">
                        <span>6 siap diambil</span>
                    </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-4 shadow-md">
                    <div className="flex justify-between">
                        <div className="bg-orange-300 p-2 rounded-lg">
                            <Users className="h-6 w-6 text-orange-100" />
                        </div>
                        <span className="text-lg font-bold">156</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Total Pelanggan</p>
                    <div className="flex items-center text-green-500 text-xs mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>+3 baru hari ini</span>
                    </div>
                </div>
            </div>

            {/* Orders Requiring Attention */}
            <Highlight />

            {/* Today's Schedule */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold">Jadwal Hari Ini</h2>
                    <button className="text-primary text-sm">Lihat Kalender</button>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded w-16 text-center">
                                09:00
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Pengambilan dari Budi Santoso</h3>
                                <p className="text-sm text-gray-500">Jl. Merdeka No. 123, Blok A4</p>
                            </div>
                            <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                Pengambilan
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded w-16 text-center">
                                11:30
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Pengantaran ke Siti Rahayu</h3>
                                <p className="text-sm text-gray-500">Jl. Dahlia No. 45, Apartemen 7</p>
                            </div>
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Pengantaran
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded w-16 text-center">
                                14:15
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">Pengambilan dari Kawasan Bisnis</h3>
                                <p className="text-sm text-gray-500">Beberapa lokasi (5)</p>
                            </div>
                            <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                Pengambilan
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
