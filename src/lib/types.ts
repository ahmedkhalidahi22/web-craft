import { z } from "zod";
import { EditorStateSchema, SectionSchema } from "./schemas";

export type Section = z.infer<typeof SectionSchema>;

export type EditorState = z.infer<typeof EditorStateSchema>;
