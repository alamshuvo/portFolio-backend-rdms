import { NextFunction, Request, Response } from "express";

import config from "../../config";
import status from "http-status";
import ApiError from "../errors/apiError";
import verifyToken from "../../helpers/verifyToken";

const auth = (...role: string[]) => {
  return async (req: Request & {user?:any}, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(status.UNAUTHORIZED, "you are not authorized");
      }
      const varifiedUser = verifyToken(
        token as string,
        config.jwt.jwtAccessToken as string
      );
    
      req.user = varifiedUser;
      if (role.length && !role.includes(varifiedUser.role)) {
        throw new ApiError(status.FORBIDDEN, "you are not authorized");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
export default auth;