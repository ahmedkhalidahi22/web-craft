"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export function PreviewArea() {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
    console.log("drag over");
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = () => {
    setIsDragging(false);
  };
  return (
    <ScrollArea
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="flex-grow relative p-2"
    >
      {isDragging && (
        <div className="absolute inset-0 bg-green-400 opacity-50 z-20 pointer-events-none"></div>
      )}

      <div className=" space-y-4 relative z-10">
        <div className="h-[calc(100vh-130px)] bg-white border border-stone-200 rounded flex items-center justify-center text-stone-500">
          Start building your webpage by dragging elements from the sidebar.
        </div>
      </div>
    </ScrollArea>
  );
}
