import { Course, Experience, Skills } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";

const insertIntoDb = async (payload: Skills, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findFirstOrThrow({
    where: {
      email: user?.email,
    },
  });
  const skillsData = {
    ...payload,
    adminId: isAdminExist.id,
  };
  const skillsDatas = await prisma.skills.create({
    data: skillsData,
  });
  return skillsDatas;
};

const getAllSkills = async () => {
  const allData = await prisma.skills.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      photo: true,
      admin: true,
    },
  });
  return allData;
};

const getSingleSkills = async (id: string) => {
  const skillsData = await prisma.skills.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return skillsData;
};

const deleteSingleSkills = async (id: string) => {
  const skillsData = await prisma.skills.delete({
    where: {
      id,
    },
  });
  return skillsData;
};

const updateSingleSkills = async (id: string, payload: Partial<Skills>) => {
  const skillsData = await prisma.skills.update({
    where: {
      id,
    },
    data: payload,
  });
  return skillsData;
};
export const skillsService = {
  insertIntoDb,
  getAllSkills,
  getSingleSkills,
  deleteSingleSkills,
  updateSingleSkills,
};
