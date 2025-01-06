"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { v1 } from "uuid";
import { Placeholder } from "./Placeholder";
import { Header } from "./builder/Header";
import Hero from "./builder/Hero";

type Section = {
  id: string;
  name: string;
};
export function PreviewArea() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    console.log("Printed Sections", sections);
  }, [sections]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
    console.log("drag over");
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    const sectionName = e.dataTransfer.getData("sectionName");
    console.log("dropped", sectionName);
    setSections((prev) => [...prev, { id: v1(), name: sectionName }]);
    setIsDragging(false);
  };
  return (
    <ScrollArea
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="flex-grow relative p-2.5"
    >
      {isDragging && (
        <div className="absolute inset-0 bg-green-400 opacity-50 z-20 pointer-events-none"></div>
      )}

      <div className=" space-y-5 relative z-10">
        {sections.length > 0 ? (
          sections.map((section) => {
            const SectionName = section.name;

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
