import { Eye } from "lucide-react";
import { PreviewArea } from "./PreviewArea";

export function PreviewAreaContainer() {
  return (
    <div className="flex-grow flex flex-col">
      <div className="bg-stone-100 p-1.5 border-b border-stone-200 flex items-center justify-center">
        <Eye className="h-4 w-4 mr-2 text-stone-500" />
        <span className="text-sm font-medium text-stone-700">Preview</span>
      </div>
      <PreviewArea />
    </div>
  );
}
