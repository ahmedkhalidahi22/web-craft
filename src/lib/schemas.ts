import { PassThrough } from "stream";
import { z } from "zod";

const ContentSchema = z
  .object({
    websiteName: z.string().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    buttonText: z.string().optional(),
    description: z.string().optional(),
    features: z.array(z.string()).length(3).optional(),
    testimonials: z.array(z.string()).length(3).optional(),
  })
  .passthrough();

export const SectionSchema = z.object({
  id: z.string(),
  type: z.string(),
  content: ContentSchema,
});

export const EditorStateSchema = z.object({
  sections: z.array(SectionSchema),
  selectedSection: SectionSchema.nullable(),
});
