import { Blogs } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";

const insertIntoDb = async (payload: Blogs, user: IAuthUser) => {
    const isAdminExist = await prisma.admin.findFirstOrThrow({
      where: {
        email: user?.email,
      },
    });
    const projectData = {
      ...payload,
      adminId: isAdminExist.id,
    };
    const projectDatas = await prisma.blogs.create({
      data: projectData,
    });
    return projectDatas;
  };
  const getAllblogs = async () => {
    const allData = await prisma.blogs.findMany({
      select: {
        id: true,
        blogsName:true,
        title:true,
        description:true,
        photo:true,
        externalLink:true,
        admin: true,
      },
    });
    return allData;
  };
  
  const getSingleblogs = async (id: string) => {
    const projectData = await prisma.blogs.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return projectData;
  };
  export const blogsService = {
    insertIntoDb,
    getAllblogs,
    getSingleblogs
  }