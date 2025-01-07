import { Blocks, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import SaveButton from "./SaveButton";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/public/svg/github-mark.svg";
import Image from "next/image";
import Link from "next/link";
export function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center justify-between p-4 border-b bg-stone-50", className)}
      {...props}
    >
      <div className="flex items-center space-x-0.5">
        <Blocks className="h-7 w-7 text-stone-700 " />
        <span className="text-lg font-extrabold relative top-0.5 text-stone-700">WebCraft</span>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          asChild
          variant="ghost"
          className="flex items-center space-x-2 border border-stone-300"
        >
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ahmedkhalidahi22/web-craft"
          >
            <Image src={GithubIcon} alt="Github" className="h-5 w-5" />
          </Link>
        </Button>
        <SaveButton />
      </div>
    </nav>
  );
}
