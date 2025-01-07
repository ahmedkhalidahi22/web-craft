"use client";

import React from "react";
import { Command } from "lucide-react";
import { Section } from "@/lib/types";
import { useEditor } from "@/providers/editorProvider";
import { cn } from "@/lib/utils";
import { ToolBar } from "../ToolBar";

type Props = {
  section: Section;
};
export function Header({ section }: Props) {
  const { state, dispatch } = useEditor();
  const { selectedSection } = state;

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_SELECTED_SECTION",
      payload: section,
    });
  };
  return (
    <nav
      onClick={handleOnClickBody}
      className={cn(
        " bg-gray-900 text-white w-full rounded-lg  hover:border-gray-400 hover:border-dashed  border-transparent border-[2px]  cursor-pointer relative",
        {
          "border-blue-700": section.id === selectedSection?.id,
          "hover:border-gray-400 hover:border-dashed": section.id !== selectedSection?.id,
        }
      )}
    >
      {section.id === selectedSection?.id && <ToolBar />}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-2">
          <Command className="h-6 w-6" />
          <span className=" font-bold">MyWebsite</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-sm">
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
