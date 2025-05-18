import express from "express";
import auth from "../../middleware/authMiddleware";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { skillValidationSchema } from "./skills.validation";
import { skillsController } from "./skills.controller";

const router = express.Router();

router.get("/", skillsController.getAllSkills);
router.get("/:id", skillsController.getSingleSkills);
router.post(
  "/",
  auth(UserRole.ADMIN),
  validateRequest(skillValidationSchema.skillValidation),
  skillsController.insertIntoDb
);

router.delete("/:id", auth(UserRole.ADMIN), skillsController.deleteSkills);
router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(skillValidationSchema.updateSkillValidation),
  skillsController.updateSkills
);
export const skillsRoutes = router;
