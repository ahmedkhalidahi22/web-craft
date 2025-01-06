"use client";
import React from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { useEditor } from "../providers/editorProvider";
import { EditorStateSchema } from "@/lib/schemas";

const ImportButton = () => {
  const { dispatch } = useEditor();

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          const parsed = EditorStateSchema.safeParse(json);
          if (parsed.success) {
            dispatch({ type: "UPDATE_STATE", payload: parsed.data });
            console.log("Editor state imported:", parsed.data);
          } else {
            console.error("Invalid editor state shape:", parsed.error);
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    } else {
      console.error("Please upload a valid JSON file");
    }
  };

  return (
    <div className="p-4 border-t border-stone-200">
      <input type="file" accept="application/json" onChange={handleImport} id="import-file" />
      <label htmlFor="import-file">
        <Button
          variant="outline"
          className="w-full justify-center text-stone-700 hover:bg-stone-100 hover:text-stone-900"
        >
          <Upload className="h-4 w-4 mr-2" />
          Import
        </Button>
      </label>
    </div>
  );
};

export default ImportButton;
