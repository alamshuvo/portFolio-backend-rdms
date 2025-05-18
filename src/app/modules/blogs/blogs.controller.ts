import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { IAuthUser } from "../../interface/common";
import status from "http-status";
import sendResponse from "../../../helpers/sendResponse.helpers";
import { blogsService } from "./blogs.service";

const insertIntoDb = catchAsync(async (req: Request &{user?:IAuthUser}, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await blogsService.insertIntoDb(data,user as IAuthUser);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Blogs Created  successfully",
      data: result,
    });
  });
  const getAllBlogs = catchAsync(async (req: Request , res: Response) => {

    const result = await blogsService.getAllblogs();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "All Blogs retrived successfully",
      data: result,
    });
  });

  const getSingleBlogs = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await blogsService.getSingleblogs(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Blogs retrived successfully",
      data: result,
    });
  });
export const blogsController = {
    insertIntoDb,
    getAllBlogs,
    getSingleBlogs
}