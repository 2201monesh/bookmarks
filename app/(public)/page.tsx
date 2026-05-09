import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex py-8 justify-center overflow-y-scroll">
        <div className="min-w-6xl h-full px-6 flex flex-col">
            <div className="flex items-center justify-between">
                <h1>Bookmarks</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="shadow-none cursor-pointer">Login</Button>
                    <Button size="sm" className="shadow-none cursor-pointer">Get Started</Button>
                </div>
            </div>
            <div className="pt-14 pb-8">
                <p className="text-2xl">Built for deep thinking</p>
                <p className="text-2xl">Compile is the best place</p>
                <p className="text-2xl">for your ideas to live</p>
                <Button size="default" className="mt-6 shadow-none cursor-pointer">Start Bookmarking your links <ArrowRight size={14} /></Button>
            </div>
            <div className="w-full h-160 border my-14"></div>
            <div className="flex w-full items-center justify-between mb-4">
                <span>Bookmarks</span>
                <span className="text-neutral-400 text-sm">Keep everything togethere</span>
            </div>
        </div>
    </div>
  );
}
