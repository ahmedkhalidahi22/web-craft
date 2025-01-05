import { Blocks, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between p-4 border-b bg-stone-50",
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-0.5">
        <Blocks className="h-7 w-7 text-stone-700 " />
        <span className="text-lg font-extrabold relative top-0.5 text-stone-700">
          WebCraft
        </span>
      </div>
      <Button
        variant="outline"
        className="text-stone-700 border-stone-300 hover:bg-stone-100"
      >
        <Download className="h-4 w-4 mr-2" />
        Save
      </Button>
    </nav>
  );
}
