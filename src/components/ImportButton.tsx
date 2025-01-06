"use client";
import React from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { useEditor } from "../providers/editorProvider";
import { EditorStateSchema } from "@/lib/schemas";
import { errorToast, successToast } from "@/lib/utils";

const ImportButton = () => {
  const { dispatch } = useEditor();

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/json") {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const json = JSON.parse(e.target?.result as string);
            const parsed = EditorStateSchema.safeParse(json);
            if (parsed.success) {
              dispatch({ type: "UPDATE_STATE", payload: parsed.data });
              console.log("Editor state imported:", parsed.data);
              successToast("Import successful", "Website data is loaded successfully.");
            } else {
              console.error("Invalid editor state shape:", parsed.error);
              errorToast("Import failed", "file data is not in the correct format.");
            }
          } catch (error) {
            console.error("Error parsing JSON:", error);
            errorToast("Import failed", "file data is not in the correct format.");
          }
        };
        reader.readAsText(file);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        errorToast("Import failed", "Please upload a valid JSON file.");
      }
    } else {
      console.error("Please upload a valid JSON file");
      errorToast("Import failed", "Please upload a valid JSON file.");
    }
  };

  return (
    <div className="p-4 border-t border-stone-200">
      <input
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImport}
        id="import-file"
      />

      <Button
        variant="outline"
        className="w-full relative justify-center text-stone-700 hover:bg-stone-100 hover:text-stone-900"
      >
        <label className="absolute w-full h-full cursor-pointer" htmlFor="import-file" />
        <Upload className="h-4 w-4 mr-2" />
        Import
      </Button>
    </div>
  );
};

export default ImportButton;
