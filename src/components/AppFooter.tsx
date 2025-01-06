import { cn } from "@/lib/utils";

export function AppFooter({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center  px-4 pt-2  bg-stone-50 w-full", className)} {...props}>
      <p className="text-stone-500  text-sm text-center mx-auto">
        Built by Ahmed Khalid, for REKAZ challenge
      </p>
    </nav>
  );
}
