import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import { Section } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createSection = (sectionType: string): Section | null => {
  switch (sectionType) {
    case "Header":
      return { id: v4(), type: "Header", content: {} };
    case "Hero":
      return { id: v4(), type: "Hero", content: {} };
    case "Features":
      return { id: v4(), type: "Features", content: {} };
    case "Testimonials":
      return { id: v4(), type: "Testimonials", content: {} };
    case "Footer":
      return { id: v4(), type: "Footer", content: {} };
    default:
      console.log("Unknown section type");
      return null;
  }
};
