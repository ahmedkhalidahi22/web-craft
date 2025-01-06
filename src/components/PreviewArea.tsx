"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Placeholder } from "./Placeholder";
import { Header } from "./builder/Header";
import Hero from "./builder/Hero";
import { createSection } from "@/lib/utils";
import { useEditor } from "@/providers/editorProvider";

export function PreviewArea() {
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const { state, dispatch } = useEditor();
  const { sections } = state;

  useEffect(() => {
    console.log("Printed Sections", sections);
  }, [sections]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
    console.log("drag over");
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.stopPropagation();

    const sectionType = e.dataTransfer.getData("sectionType");
    console.log("dropped", sectionType);

    const newSection = createSection(sectionType);

    if (newSection) {
      dispatch({ type: "ADD_SECTION", payload: newSection });
    }
    setIsDraggingOver(false);
  };

  return (
    <ScrollArea
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="flex-grow relative p-2.5"
    >
      {isDraggingOver && (
        <div className="absolute inset-0 bg-green-400 opacity-50 z-20 pointer-events-none"></div>
      )}

      <div className=" space-y-5 relative z-10 ">
        {state.sections.length > 0 ? (
          sections.map((section) => {
            const SectionName = section.type;

            if (!SectionName) return null;
            if (SectionName === "Header") return <Header key={section.id} />;
            if (SectionName === "Hero") return <Hero key={section.id} />;
          })
        ) : (
          <Placeholder />
        )}
      </div>
    </ScrollArea>
  );
}
