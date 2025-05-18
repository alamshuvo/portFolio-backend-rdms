import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { IAuthUser } from "../../interface/common";
import sendResponse from "../../../helpers/sendResponse.helpers";
import status from "http-status";
import { experienceService } from "./experience.service";


const insertIntoDb = catchAsync(async (req: Request &{user?:IAuthUser}, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await experienceService.insertIntoDb(data,user as IAuthUser);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Experience Created  successfully",
      data: result,
    });
  });

  const getAllExperience = catchAsync(async (req: Request , res: Response) => {

    const result = await experienceService.getAllExperience();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "All Experience retrived successfully",
      data: result,
    });
  });

  const getSingleExperience = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await experienceService.getSingleExperience(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Experience retrived successfully",
      data: result,
    });
  });


  const deleteExperience = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await experienceService.deleteSingleExperience(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Experience delete successfully",
      data: result,
    });
  });

  const updateExperience= catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await experienceService.updateSingleExperience(id,data );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Experience update  successfully",
      data: result,
    });
  });
  export const experienceController = {
    insertIntoDb,
    getAllExperience,
    getSingleExperience,
    deleteExperience,
    updateExperience
  }