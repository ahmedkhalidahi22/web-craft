import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import Badge from "./Badge";
import { useEditor } from "@/providers/editorProvider";

export const ToolBar = () => {
  const { state, dispatch } = useEditor();
  const { selectedSection } = state;

  const handleMoveSectionAbove = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "MOVE_SECTION_ABOVE",
      payload: selectedSection?.id as string,
    });
  };
  const handleMoveSectionBelow = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "MOVE_SECTION_BELOW",
      payload: selectedSection?.id as string,
    });
  };
  const handleDeleteSection = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_SECTION",
      payload: selectedSection?.id as string,
    });
  };

  return (
    <>
      <Badge>{selectedSection?.type}</Badge>

      <span
        onClick={handleMoveSectionAbove}
        className="absolute -top-[22px] right-[60px] bg-blue-700 hover:bg-blue-600 text-white z-50 px-1 py-1 text-xs font-semibold rounded-none rounded-t"
      >
        <ArrowUp size={14} />
      </span>
      <span
        onClick={handleMoveSectionBelow}
        className="absolute -top-[22px] right-8 bg-blue-700 hover:bg-blue-600 text-white z-50 px-1 py-1 text-xs font-semibold rounded-none rounded-t"
      >
        <ArrowDown size={14} />
      </span>
      <span
        onClick={handleDeleteSection}
        className="absolute -top-[22px] right-1 bg-red-500 hover:bg-red-400 text-white z-50 px-1 py-1 text-xs font-semibold rounded-none rounded-t"
      >
        <Trash size={14} />
      </span>
    </>
  );
};
