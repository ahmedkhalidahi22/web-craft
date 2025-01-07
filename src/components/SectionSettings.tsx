"use client";

import React from "react";
import { useEditor } from "@/providers/editorProvider";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { SwitchCamera } from "lucide-react";

export const SectionSettings = () => {
  const { state } = useEditor();
  const { selectedSection } = state;

  if (!selectedSection) {
    return <div className="p-4">No section selected</div>;
  }

  return (
    <div className="p-4 space-y-4 relative ">
      <h2 className="mb-2 text font-semibold text-stone-900">{selectedSection.type} Settings</h2>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-title">
          Title
        </Label>
        <Input id="section-title" placeholder="Enter title" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-subtitle">
          Subtitle
        </Label>
        <Input id="section-subtitle" placeholder="Enter subtitle" />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-stone-700" htmlFor="section-background">
          Background Color
        </Label>
        <Input id="section-background" type="color" />
      </div>
    </div>
  );
};

export default SectionSettings;
