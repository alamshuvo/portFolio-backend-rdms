import { UserRole } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import bcrypt from 'bcrypt'
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import generateToken from "../../../helpers/generateToken";
const loginUser = async (payload: { email: string; password: string }) => {
    //check is user data exist
    const userData = await prisma.admin.findFirstOrThrow({
      where: {
        email: payload.email,
        role: UserRole.ADMIN,
      },
    });
    // check is password correct
    const isCorrectPassword = await bcrypt.compare(
      payload.password,
      userData.password
    );
    if (!isCorrectPassword) {
      throw new Error("password incorect");
    }
    const jwtPayload = {
      email: userData.email,
      role: userData.role,
    };
    const accessToken = generateToken(
     jwtPayload,
      config.jwt.jwtAccessToken as Secret,
      config.jwt.jwtExpiresIn as string
    );
    const refreshToken = generateToken(
     jwtPayload,
      config.jwt.refreshTokenSecret as Secret,
      config.jwt.refreshExpiresIn as string
    );
    return {
      accessToken,
      refreshToken,
    };
  };
  export const authService = {
    loginUser,
    
  };