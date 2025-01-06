"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Layout,
  Home,
  LayoutGrid,
  MessageSquare,
  FootprintsIcon as FooterIcon,
} from "lucide-react";
import { EditorSections } from "@/lib/constants";

const sections = [
  { name: "Header", icon: <Layout className="h-4 w-4 mr-2" /> },
  { name: "Hero", icon: <Home className="h-4 w-4 mr-2" /> },
  { name: "Features", icon: <LayoutGrid className="h-4 w-4 mr-2" /> },
  { name: "Testimonials", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
  { name: "Footer", icon: <FooterIcon className="h-4 w-4 mr-2" /> },
];

const SideBarSectionItems = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleOnDragStart = (
    e: React.DragEvent,
    sectionName: EditorSections
  ) => {
    e.dataTransfer.setData("sectionType", sectionName);
    setDraggedItem(sectionName);
    console.log("drag start", sectionName);
  };

  const handleOnDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-stone-900">Sections</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li
            key={section.name}
            draggable
            onDragStart={(e) => {
              handleOnDragStart(e, section.name as EditorSections);
            }}
            onDragEnd={handleOnDragEnd}
            className={` ${draggedItem === section.name ? "opacity-50" : ""} `}
          >
            <Button
              variant="ghost"
              className={` w-full justify-start text-stone-700 hover:bg-stone-100 hover:text-stone-900 `}
            >
              {section.icon}
              {section.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarSectionItems;
