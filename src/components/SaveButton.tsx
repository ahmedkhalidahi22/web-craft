"use client";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useEditor } from "../providers/editorProvider";
import { toast } from "@/hooks/use-toast";

const SaveButton = () => {
  const { state } = useEditor();

  const handleSave = () => {
    const editorState = JSON.stringify(state, null, 2); // Pretty-print JSON
    const blob = new Blob([editorState], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "saved-website.json";
    a.click();
    URL.revokeObjectURL(url);
    console.log("Editor state saved and downloaded:", editorState);
    toast({
      title: "Website saved",
      description: "Your website has been saved successfully.",
      variant: "success",
    });
  };

  return (
    <Button
      variant="outline"
      className="text-stone-700 border-stone-300 hover:bg-stone-100"
      onClick={handleSave}
    >
      <Download className="h-4 w-4 mr-2" />
      Save
    </Button>
  );
};

export default SaveButton;
