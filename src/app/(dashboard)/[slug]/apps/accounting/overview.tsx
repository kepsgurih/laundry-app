import { formatRupiah } from "@/lib/formatRupiah";
import { TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const financialSummary = {
    revenue: 12500000,
    expenses: 7800000,
    profit: 4700000,
    profitMargin: 37.6,
    trend: "up", // up or down
    trendPercentage: 8.2,
}

export default function OverviewAccounting() {
    return (
        <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Pendapatan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatRupiah(financialSummary.revenue)}</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>+12% dari bulan lalu</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Biaya</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatRupiah(financialSummary.expenses)}</div>
                        <div className="flex items-center text-sm text-red-500 mt-1">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>+5% dari bulan lalu</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Keuntungan Bersih</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatRupiah(financialSummary.profit)}</div>
                        <div className="flex items-center text-sm text-green-500 mt-1">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>+{financialSummary.trendPercentage}% dari bulan lalu</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Perbandingan Pendapatan dan Biaya</CardTitle>
                    <CardDescription>Periode Oktober 2023</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Pendapatan</span>
                                <span>{formatRupiah(financialSummary.revenue)}</span>
                            </div>
                            <Progress value={100} className="h-2 bg-blue-100">
                                <div className="h-full bg-blue-500 rounded-full" />
                            </Progress>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Biaya</span>
                                <span>{formatRupiah(financialSummary.expenses)}</span>
                            </div>
                            <Progress
                                value={(financialSummary.expenses / financialSummary.revenue) * 100}
                                className="h-2 bg-red-100"
                            >
                                <div className="h-full bg-red-500 rounded-full" />
                            </Progress>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Keuntungan</span>
                                <span>
                                    {formatRupiah(financialSummary.profit)} ({financialSummary.profitMargin}%)
                                </span>
                            </div>
                            <Progress
                                value={(financialSummary.profit / financialSummary.revenue) * 100}
                                className="h-2 bg-green-100"
                            >
                                <div className="h-full bg-green-500 rounded-full" />
                            </Progress>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Distribusi Biaya Operasional</CardTitle>
                        <CardDescription>Berdasarkan kategori</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span>Gaji</span>
                                </div>
                                <span>50%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span>Sewa</span>
                                </div>
                                <span>17%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span>Bahan</span>
                                </div>
                                <span>12%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <span>Utilitas</span>
                                </div>
                                <span>14%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                                    <span>Lainnya</span>
                                </div>
                                <span>7%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Distribusi Pendapatan</CardTitle>
                        <CardDescription>Berdasarkan layanan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span>Cuci Reguler</span>
                                </div>
                                <span>39%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span>Cuci Express</span>
                                </div>
                                <span>28%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span>Dry Clean</span>
                                </div>
                                <span>22%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <span>Setrika</span>
                                </div>
                                <span>7%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                                    <span>Antar-Jemput</span>
                                </div>
                                <span>4%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </TabsContent>
    )
}