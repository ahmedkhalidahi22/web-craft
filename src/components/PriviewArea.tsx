import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye } from "lucide-react";

export function PreviewArea() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="bg-stone-100 p-2 border-b border-stone-200 flex items-center justify-center">
        <Eye className="h-4 w-4 mr-2 text-stone-500" />
        <span className="text-sm font-medium text-stone-700">Preview</span>
      </div>
      <ScrollArea className="flex-grow relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-9xl font-bold text-stone-100 select-none">
            PREVIEW
          </span>
        </div>
        <div className="p-4 space-y-4 relative z-10">
          <div className="h-40 bg-white border border-stone-200 rounded flex items-center justify-center text-stone-500">
            Header Placeholder
          </div>
          <div className="h-80 bg-white border border-stone-200 rounded flex items-center justify-center text-stone-500">
            Hero Placeholder
          </div>
          <div className="h-60 bg-white border border-stone-200 rounded flex items-center justify-center text-stone-500">
            Features Placeholder
          </div>
          <div className="h-40 bg-white border border-stone-200 rounded flex items-center justify-center text-stone-500">
            Footer Placeholder
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
