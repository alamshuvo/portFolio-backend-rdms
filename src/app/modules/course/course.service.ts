import { Course } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import status from "http-status";

const insertIntoDb = async (payload: Course, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findUnique({
    where: {
      email: user?.email,
    },
  });
  if (!isAdminExist) {
    throw new ApiError(status.NOT_FOUND,"admin Does not exist")
  }
  const courseData = {
    ...payload,
    adminId: isAdminExist.id,
  };
  
  const courseDatas = await prisma.course.create({
    data: courseData,
  });
  return courseDatas;
};

const getAllCourse = async () => {
  const allData = await prisma.course.findMany({
    select: {
      id: true,
      courseName: true,
      duration: true,
      certificate: true,
      admin: true,
    },
  });
  return allData;
};

const getSinglecourse = async (id: string) => {
  const courseData = await prisma.course.findUnique({
    where: {
      id,
    },
  });
  return courseData;
};

const deleteSingleCourse = async (id: string) => {
    const courseData = await prisma.course.delete({
      where: {
        id,
      },
    });
    return courseData;
  };
  
  const updateSingleCourse = async (id: string, payload: Partial<Course>) => {
    const courseData = await prisma.course.update({
      where: {
        id,
      },
      data: payload,
    });
    return courseData;
  };
export const courseService = {
  insertIntoDb,
  getAllCourse,
  getSinglecourse,
  deleteSingleCourse,
  updateSingleCourse
};
