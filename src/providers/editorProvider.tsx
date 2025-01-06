"use client";
import { EditorState, Section } from "@/lib/types";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

type Action =
  | { type: "ADD_SECTION"; payload: Section }
  | { type: "REMOVE_SECTION"; payload: string }
  | { type: "SELECT_SECTION"; payload: Section | null }
  | { type: "UPDATE_STATE"; payload: EditorState }
  | { type: "CHANGE_SELECTED_SECTION"; payload: Section };

const initialState: EditorState = {
  sections: [],
  selectedSection: null,
};

const EditorContext = createContext<{ state: EditorState; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const editorReducer = (state: EditorState, action: Action): EditorState => {
  switch (action.type) {
    case "ADD_SECTION":
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
    case "REMOVE_SECTION":
      return {
        ...state,
        sections: state.sections.filter((section) => section.id !== action.payload),
      };
    case "SELECT_SECTION":
      return {
        ...state,
        selectedSection: action.payload,
      };
    case "UPDATE_STATE":
      return {
        ...state,
        sections: action.payload.sections,
        selectedSection: action.payload.selectedSection,
      };
    case "CHANGE_SELECTED_SECTION":
      return {
        ...state,
        selectedSection: action.payload,
      };
    default:
      return state;
  }
};

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return <EditorContext.Provider value={{ state, dispatch }}>{children}</EditorContext.Provider>;
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor Hook must be used within the editor Provider");
  }
  return context;
};
