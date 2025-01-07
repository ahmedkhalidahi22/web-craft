"use client";

import { useEditor } from "@/providers/editorProvider";
import { Tabs } from "./ui/tabs";

import { ReactNode, useEffect, useState } from "react";

export const TabsWrapper = ({ children }: { children: ReactNode }) => {
  const { state } = useEditor();
  const { selectedSection } = state;

  const [tab, setTab] = useState<string>("tab1");

  const onTabChange = (value: string) => {
    setTab(value);
  };

  useEffect(() => {
    if (selectedSection) {
      onTabChange("settings");
    }
  }, [selectedSection]);

  return (
    <Tabs value={tab} onValueChange={onTabChange} className="flex overflow-hidden  flex-col h-full">
      {children}
    </Tabs>
  );
};
