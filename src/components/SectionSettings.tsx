"use client";

import React from "react";
import { useEditor } from "@/providers/editorProvider";
import RenderedSettings from "./RenderedSettings";

export const SectionSettings = () => {
  const { state } = useEditor();
  const { selectedSection } = state;

  if (!selectedSection) {
    return <div className="p-4 text-center text-stone-500">No section selected</div>;
  }

  return <RenderedSettings />;
};

export default SectionSettings;
