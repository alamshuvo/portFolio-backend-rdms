import { Course } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";

const insertIntoDb = async (payload: Course, user: IAuthUser) => {
  const isAdminExist = await prisma.admin.findFirstOrThrow({
    where: {
      email: user?.email,
    },
  });
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
  const courseData = await prisma.course.findUniqueOrThrow({
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
