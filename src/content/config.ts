import { defineCollection, z } from "astro:content";

// 1. Define a Reusable Schema for your "Garden" content
// This covers: notes, recipes, research, tools, guides, etc.
const gardenSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  maturity: z.enum(["seedling", "budding", "evergreen"]).optional(),
});

// 2. Define specialized schemas
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
  demoURL: z.string().optional(),
  repoURL: z.string().optional()
});

const workSchema = z.object({
  company: z.string(),
  role: z.string(),
  dateStart: z.coerce.date(),
  dateEnd: z.union([z.coerce.date(), z.string()]),
});

// 3. Map your folders to the schemas
export const collections = {
  // Existing
  blog: defineCollection({ type: "content", schema: gardenSchema }),
  work: defineCollection({ type: "content", schema: workSchema }),
  projects: defineCollection({ type: "content", schema: projectSchema }),

  // Your New Folders (Using the Garden Schema)
  notes: defineCollection({ type: "content", schema: gardenSchema }),
  guides: defineCollection({ type: "content", schema: gardenSchema }),
  tools: defineCollection({ type: "content", schema: gardenSchema }),
  recipes: defineCollection({ type: "content", schema: gardenSchema }),
  research: defineCollection({ type: "content", schema: gardenSchema }),
  lists: defineCollection({ type: "content", schema: gardenSchema }),
  links: defineCollection({ type: "content", schema: gardenSchema }),
  favorite: defineCollection({ type: "content", schema: gardenSchema }),
  post: defineCollection({ type: "content", schema: gardenSchema }),
  archive: defineCollection({ type: "content", schema: gardenSchema }),
  drafts: defineCollection({ type: "content", schema: gardenSchema }),
  computer: defineCollection({ type: "content", schema: gardenSchema }),
  series: defineCollection({ type: "content", schema: gardenSchema }),
  packages: defineCollection({ type: "content", schema: gardenSchema }),
  blogroll: defineCollection({ type: "content", schema: gardenSchema }),
  
  // Specialty folders
  gallery: defineCollection({ type: "content", schema: gardenSchema }), 
  pages: defineCollection({ type: "content", schema: gardenSchema }),
};