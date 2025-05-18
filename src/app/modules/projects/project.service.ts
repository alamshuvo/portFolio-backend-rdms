import { prisma } from "../../../shared/prisma";
import { IAuthUser } from "../../interface/common";

const insertIntoDb = async (payload: any, user: IAuthUser) => {
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
  return projectDatas
};

export const projectService = {
  insertIntoDb,
};
