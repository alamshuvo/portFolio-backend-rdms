import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { IAuthUser } from "../../interface/common";
import sendResponse from "../../../helpers/sendResponse.helpers";
import status from "http-status";
import { courseService } from "./course.service";

const insertIntoDb = catchAsync(async (req: Request &{user?:IAuthUser}, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await courseService.insertIntoDb(data,user as IAuthUser);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "course Created  successfully",
      data: result,
    });
  });

  const getAllCourse = catchAsync(async (req: Request , res: Response) => {

    const result = await courseService.getAllCourse();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "All Course retrived successfully",
      data: result,
    });
  });

  const getSingleCourse = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await courseService.getSinglecourse(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Course retrived successfully",
      data: result,
    });
  });


  const deleteCourse = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await courseService.deleteSingleCourse(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Course delete successfully",
      data: result,
    });
  });

  const updateCourse = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await courseService.updateSingleCourse(id,data );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Course update  successfully",
      data: result,
    });
  });
  export const courseController = {
    insertIntoDb,
    getAllCourse,
    getSingleCourse,
    deleteCourse,
    updateCourse
  }