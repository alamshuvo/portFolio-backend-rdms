import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { IAuthUser } from "../../interface/common";
import sendResponse from "../../../helpers/sendResponse.helpers";
import status from "http-status";
import { skillsService } from "./skills.service";



const insertIntoDb = catchAsync(async (req: Request &{user?:IAuthUser}, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await skillsService.insertIntoDb(data,user as IAuthUser);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Skills  Created  successfully",
      data: result,
    });
  });

  const getAllSkills = catchAsync(async (req: Request , res: Response) => {

    const result = await skillsService.getAllSkills();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "All Skills retrived successfully",
      data: result,
    });
  });

  const getSingleSkills = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await skillsService.getSingleSkills(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Skills retrived successfully",
      data: result,
    });
  });


  const deleteSkills = catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const result = await skillsService.deleteSingleSkills(id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Skills delete successfully",
      data: result,
    });
  });

  const updateSkills= catchAsync(async (req: Request , res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await skillsService.updateSingleSkills(id,data );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Single Skills update  successfully",
      data: result,
    });
  });
  export const skillsController = {
    insertIntoDb,
    getAllSkills,
    getSingleSkills,
    updateSkills,
    deleteSkills
   
  }