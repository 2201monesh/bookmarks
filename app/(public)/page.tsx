import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex py-8 justify-center overflow-y-scroll">
      <div className="min-w-6xl h-full px-6 flex flex-col">

        <div className="flex items-center justify-between">
          <h1>Bookmarks</h1>
          <div className="flex items-center gap-2">
            <Link href="/home">
              <Button variant="outline" size="sm" className="shadow-none cursor-pointer">Login</Button>
            </Link>  
            <Link href="/home">
              <Button size="sm" className="shadow-none cursor-pointer">Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="pt-14 pb-8">
          <p className="text-2xl">Built for deep thinking</p>
          <p className="text-2xl">Compile is the best place</p>
          <p className="text-2xl">for your ideas to live</p>
          <Link href="/home">
            <Button size="default" className="mt-6 shadow-none cursor-pointer">
              Start Bookmarking your links <ArrowRight size={14} />
            </Button>
          </Link>  
        </div>

        <div className="w-full h-160 border my-14 rounded-lg overflow-hidden img-container">
          <img
            src="https://i.pinimg.com/1200x/20/62/49/2062496223513ff6677c4a12698a0a7a.jpg"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex w-full items-center justify-between mb-4">
          <span>Bookmarks</span>
          <span className="text-neutral-400 text-sm">Keep everything together</span>
        </div>

      </div>
    </div>
  );
}
