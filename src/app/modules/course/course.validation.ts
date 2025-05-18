import { z } from 'zod';

export const courseValidation = z.object({
  body: z.object({
    adminId: z.string().optional(),
    courseName: z.string({ required_error: "courseName is required" }),
    duration: z.string().optional(),
    certificate: z.string().optional(),
  }),
});

export const updateCourseValidation = z.object({
    body: z.object({
      adminId: z.string().optional(),
      courseName: z.string().optional(),
      duration: z.string().optional(),
      certificate: z.string().optional(),
    }),
  });
  

export const courseValidationSchema = {
    courseValidation,
    updateCourseValidation
}