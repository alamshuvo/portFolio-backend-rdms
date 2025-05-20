import { UserRole } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { IAuthUser } from "../../interface/common";

const fetchDashboardMetaData = async (user: IAuthUser) => {
  let metaData;
  switch (user?.role) {
    case UserRole.ADMIN:
      metaData = getAdminMetaData();
      break;
    default:
      throw new Error("Invalid user role");
  }
  return metaData;
};

const getAdminMetaData = async () => {
  const projectsCount = await prisma.projects.count();
  const patientCount = await prisma.skills.count();
  const experienceCount = await prisma.experience.count();
  const blogsCount = await prisma.blogs.count();
  const courseCount = await prisma.course.count();

  return {
    projectsCount,
    patientCount,
    experienceCount,
    blogsCount,
    courseCount,
  };
};

// some code added



export const MetaDataService = {
  fetchDashboardMetaData,
};
