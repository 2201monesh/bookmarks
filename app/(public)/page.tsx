import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex py-8 justify-center h-screen">
        <div className="min-w-6xl h-full px-6 flex flex-col">
            <div className="flex items-center justify-between">
                <h1>Bookmarks</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="shadow-none">Login</Button>
                    <Button size="sm" className="shadow-none">Get Started</Button>
                </div>
            </div>
            <div className="py-14">
                <p className="text-2xl">Built for deep thinking</p>
                <p className="text-2xl">Compile is the best place</p>
                <p className="text-2xl">for your ideas to live</p>
                <Button size="sm" className="mt-4 shadow-none">Start Bookmarking your links</Button>
            </div>
        </div>
    </div>
  );
}
