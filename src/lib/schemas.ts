import { z } from "zod";

export const SectionSchema = z.object({
  id: z.string(),
  type: z.string(),
  content: z.object({}).passthrough(),
});

export const EditorStateSchema = z.object({
  sections: z.array(SectionSchema),
  selectedSection: SectionSchema.nullable(),
});
