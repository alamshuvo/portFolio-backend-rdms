import { z } from "zod";

export const blogValidation = z.object({
    body: z.object({
      adminId: z.string().optional(),
      blogsName: z.string({ required_error: "blogsName is required" }),
      title: z.string({ required_error: "title is required" }),
      description: z.string({ required_error: "description is required" }),
      photo: z.string().optional(),
      externalLink: z.string().optional(),
    }),
  });

  export const updateblogValidation = z.object({
    body: z.object({
      adminId: z.string().optional(),
      blogsName: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      photo: z.string().optional(),
      externalLink: z.string().optional(),
    }),
  });

  export const blogsValidationSchema = {
    blogValidation,
    updateblogValidation
  }