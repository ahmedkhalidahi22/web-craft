import { cn } from "@/lib/utils";

import { ReactNode } from "react";

const Badge = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <span
      className={cn(
        "absolute -top-[29px]  z-60  text-stone-50 px-2.5 py-0.5 bg-blue-700 text-xs font-semibold mt-2 ml-2 rounded-none rounded-t-lg",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
