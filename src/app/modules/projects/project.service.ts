import { Projects } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { IAuthUser } from "../../interface/common";

const insertIntoDb = async (payload: Projects, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findFirstOrThrow({
    where: {
      email: user?.email,
    },
  });
  const projectData = {
    ...payload,
    adminId: isAdminExist.id,
  };
  const projectDatas = await prisma.projects.create({
    data: projectData,
  });
  return projectDatas;
};

const getAllProjects = async () => {
  const allData = await prisma.projects.findMany({
    select: {
      id: true,
      projectsName: true,
      liveLink: true,
      githubFrontendLink: true,
      githubBackendLink: true,
      projectPhoto: true,
      backendLiveLink: true,
      deployedIn: true,
      description: true,
      admin: true,
    },
  });
  return allData;
};

const getSingleProject = async (id: string) => {
  const projectData = await prisma.projects.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return projectData;
};

const deleteSingleProject = async (id: string) => {
  const projectData = await prisma.projects.delete({
    where: {
      id,
    },
  });
  return projectData;
};

const updateSingleProject = async (id: string, payload: Partial<Projects>) => {
  const projectData = await prisma.projects.update({
    where: {
      id,
    },
    data: payload,
  });
  return projectData;
};
export const projectService = {
  insertIntoDb,
  getAllProjects,
  getSingleProject,
  deleteSingleProject,
  updateSingleProject,
};
