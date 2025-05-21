import { Course, Experience, Skills } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import status from "http-status";

const insertIntoDb = async (payload: Skills, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findUnique({
    where: {
      email: user?.email,
    },
  });
  if (!isAdminExist) {
    throw new ApiError(status.NOT_FOUND,"admin Does not exist")
  }
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
  const skillsData = await prisma.skills.findUnique({
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
