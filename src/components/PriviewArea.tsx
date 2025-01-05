import { ScrollArea } from "@/components/ui/scroll-area";

export function PreviewArea() {
  return (
    <ScrollArea className="flex-grow p-4">
      <div className="space-y-4">
        <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
          Header Placeholder
        </div>
        <div className="h-80 bg-gray-200 rounded flex items-center justify-center">
          Hero Placeholder
        </div>
        <div className="h-60 bg-gray-200 rounded flex items-center justify-center">
          Features Placeholder
        </div>
        <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
          Footer Placeholder
        </div>
      </div>
    </ScrollArea>
  );
}
