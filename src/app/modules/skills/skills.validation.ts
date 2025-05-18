import { z } from 'zod';

export const skillValidation = z.object({
  body: z.object({
    adminId: z.string().optional(),
    title: z.string({ required_error: "title is required" }),
    description: z.string({ required_error: "description is required" }),
    photo: z.string().optional(),
  }),
});

export const updateSkillValidation = z.object({
    body: z.object({
      adminId: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      photo: z.string().optional(),
    }),
  });
  


export const skillValidationSchema = {
    skillValidation,
    updateSkillValidation

}
