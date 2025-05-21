import { Course, Experience } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import status from "http-status";

const insertIntoDb = async (payload: Experience, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findUnique({
    where: {
      email: user?.email,
    },
  });
  if (!isAdminExist) {
    throw new ApiError(status.NOT_FOUND,"admin Does not exist")
  }
  const ExperienceData = {
    ...payload,
    adminId: isAdminExist.id,
  };
  const ExperienceDatas = await prisma.experience.create({
    data: ExperienceData,
  });
  return ExperienceDatas;
};

const getAllExperience = async () => {
  const allData = await prisma.experience.findMany({
    select: {
      id: true,
      companyLocation:true,
      companyName:true,
      role:true,
      admin: true,
    },
  });
  return allData;
};

const getSingleExperience = async (id: string) => {
  const experienceData = await prisma.experience.findUnique({
    where: {
      id,
    },
  });
  return experienceData;
};

const deleteSingleExperience = async (id: string) => {
    const experienceData = await prisma.experience.delete({
      where: {
        id,
      },
    });
    return experienceData;
  };
  
  const updateSingleExperience = async (id: string, payload: Partial<Experience>) => {
    const experienceData = await prisma.experience.update({
      where: {
        id,
      },
      data: payload,
    });
    return experienceData;
  };
export const experienceService = {
  insertIntoDb,
 getAllExperience,
 getSingleExperience,
 deleteSingleExperience,
 updateSingleExperience
};
