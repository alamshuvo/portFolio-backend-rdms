import { z } from 'zod';

export const projectValidation = z.object({
  body: z.object({
    adminId: z.string().optional(),
    projectsName: z.string({ required_error: "projectsName is required" }),
    liveLink: z.string({ required_error: "liveLink is required" }),
    githubFrontendLink: z.string().optional(),
    githubBackendLink: z.string().optional(),
    projectPhoto: z.string().optional(),
    backendLiveLink: z.string().optional(),
    deployedIn: z.string().optional(),
    description: z.string({ required_error: "description is required" }),
  }),
});

export const projectValidationSchema = {
    projectValidation
}