import { Blogs } from "@prisma/client";
import { IAuthUser } from "../../interface/common";
import { prisma } from "../../../shared/prisma";
import ApiError from "../../errors/apiError";
import status from "http-status";

const insertIntoDb = async (payload: Blogs, user: IAuthUser) => {
    const isAdminExist = await prisma.admin.findUnique({
      where: {
        email: user?.email,
      },
    });
    if (!isAdminExist) {
      throw new ApiError(status.NOT_FOUND,"admin Does not exist")
    }
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
    console.log("object");
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
    const projectData = await prisma.blogs.findUnique({
      where: {
        id,
      },
    });
    return projectData;
  };

  const deleteBlogs = async (id: string) => {
    const projectData = await prisma.blogs.delete({
      where: {
        id,
      },
    });
    return projectData;
  };
  
  const updateBlogs = async (id: string, payload: Partial<Blogs>) => {
    const projectData = await prisma.blogs.update({
      where: {
        id,
      },
      data: payload,
    });
    return projectData;
  };
  export const blogsService = {
    insertIntoDb,
    getAllblogs,
    getSingleblogs,
    deleteBlogs,
    updateBlogs
  }