import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse.helpers";
import status from "http-status";
import { authService } from "./auth.srvice";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  const result = await authService.loginUser(data);
  const { refreshToken } = result;
  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: false });
   sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "log in sucessfully",
    data: {
      accessToken: result.accessToken,
    },
  });
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await authService.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Logged in successfully",
    data: result,
  });
});
export const authController = {
  loginUser,
  refreshToken,
};
