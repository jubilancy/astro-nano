import { defineCollection, z } from "astro:content";

// 1. Minimalist Garden Schema (Everything optional for easy drag-and-drop)
const gardenSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    maturity: z.enum(["seedling", "budding", "evergreen"]).optional(),
  }),
});

// 2. Minimalist Project Schema
const projectSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

// 3. Minimalist Work Schema
const workSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(), // Added for consistency with your home page list
    company: z.string().optional(),
    role: z.string().optional(),
    dateStart: z.coerce.date().optional(),
    dateEnd: z.union([z.coerce.date(), z.string()]).optional(),
  }),
});

// 4. Map your folders to the schemas
export const collections = {
  blog: gardenSchema,
  work: workSchema,
  projects: projectSchema,
  notes: gardenSchema,
  guides: gardenSchema,
  tools: gardenSchema,
  recipes: gardenSchema,
  research: gardenSchema,
  lists: gardenSchema,
  links: gardenSchema,
  favorite: gardenSchema,
  post: gardenSchema,
  archive: gardenSchema,
  drafts: gardenSchema,
  computer: gardenSchema,
  series: gardenSchema,
  packages: gardenSchema,
  blogroll: gardenSchema,
  gallery: gardenSchema, 
  pages: gardenSchema,
};