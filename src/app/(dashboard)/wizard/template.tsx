import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[url('/bg2.jpg')] bg-cover flex h-[100vh] w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <ScrollArea className="min-h-[100vh] max-h-[100vh] overflow-auto py-10">
                    {children}
                    <ScrollBar orientation="vertical" />
                </ScrollArea>

            </div>
        </div>

    )
}