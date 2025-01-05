import { Blocks } from "lucide-react";
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
        <Blocks className="h-7 w-7 " />
        <span className="text-lg font-extrabold relative top-0.5">
          WebCraft
        </span>
      </div>
      <Button variant="outline">Save</Button>
    </nav>
  );
}
