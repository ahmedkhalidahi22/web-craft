import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import { Section } from "./types";
import { toast } from "@/hooks/use-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createSection = (sectionType: string): Section | null => {
  switch (sectionType) {
    case "Header":
      return {
        id: v4(),
        type: "Header",
        content: {
          websiteName: "MyWebsite",
        },
      };
    case "Hero":
      return {
        id: v4(),
        type: "Hero",
        content: {
          title: "Welcome to Our Website",
          subtitle: "Discover amazing features and solutions to enhance your business growth.",
          buttonText: "Get Started",
        },
      };
    case "Features":
      return {
        id: v4(),
        type: "Features",
        content: {
          title: "Revolutionary Features",
          description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus mi quis`,
        },
      };
    case "Testimonials":
      return {
        id: v4(),
        type: "Testimonials",
        content: {
          title: "What Our Clients Say",
          description: `Testimonials from our happy clients`,
        },
      };
    case "Footer":
      return { id: v4(), type: "Footer", content: { websiteName: "MyWebsite" } };
    default:
      console.log("Unknown section type");
      return null;
  }
};

export function errorToast(title: string, description: string) {
  toast({
    title,
    description,
    variant: "destructive",
  });
}

export function successToast(title: string, description: string) {
  toast({
    title,
    description,
    variant: "success",
  });
}
