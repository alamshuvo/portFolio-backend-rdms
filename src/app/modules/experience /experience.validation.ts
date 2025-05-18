import { z } from 'zod';

export const experienceValidation = z.object({
  body: z.object({
    adminId: z.string().optional(),
    companyLocation: z.string().optional(),
    companyName: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const updateexperienceValidation = z.object({
    body: z.object({
      adminId: z.string().optional(),
      companyLocation: z.string().optional(),
      companyName: z.string().optional(),
      role: z.string().optional(),
    }),
  });
  

export const experienceValidationSchema = {
    experienceValidation,
    updateexperienceValidation
}