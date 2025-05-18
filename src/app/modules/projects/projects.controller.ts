import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse.helpers";
import status from "http-status";
import { projectService } from "./project.service";
import { IAuthUser } from "../../interface/common";

const insertIntoDb = catchAsync(async (req: Request &{user?:IAuthUser}, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await projectService.insertIntoDb(data,user as IAuthUser);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Projects Created  successfully",
      data: result,
    });
  });

  const getAllProjects = catchAsync(async (req: Request , res: Response) => {

    const result = await projectService.getAllProjects();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "All Projects retrived successfully",
      data: result,
    });
  });

  const getSingleProject = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await projectService.getSingleProject(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Projects retrived successfully",
      data: result,
    });
  });

export const projectController = {
    insertIntoDb,
    getAllProjects,
    getSingleProject
}