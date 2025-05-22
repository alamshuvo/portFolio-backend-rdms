import {   PrismaClient, UserRole } from "@prisma/client";

import bcrypt from 'bcrypt'
import config from "../../../config";
import { JwtPayload, Secret } from "jsonwebtoken";
import generateToken from "../../../helpers/generateToken";
import verifyToken from "../../../helpers/verifyToken";
import ApiError from "../../errors/apiError";
import status from "http-status";
const prisma = new PrismaClient();
const loginUser = async (payload: { email: string; password: string }) => {
    //check is user data exist
 console.log(payload,"payload");
    const userData = await prisma.admin.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (!userData) {
      throw new ApiError(status.NOT_FOUND,"admin Does not exist")
    }
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



  const refreshToken = async (token: string) => {
    let decodedData;
    try {
      decodedData = verifyToken(
        token,
        config.jwt.refreshTokenSecret as Secret
      ) as JwtPayload;
    } catch (error) {
      throw new Error("you are not authorized");
    }
    const userData = await prisma.admin.findUnique({
      where: {
        email: decodedData?.email,
        role: UserRole.ADMIN,
      },
    });
    if (!userData) {
      throw new ApiError(status.NOT_FOUND,"admin Does not exist")
    }
    const accessToken = generateToken(
      {
        email: userData.email,
        role: userData.role,
      },
      config.jwt.jwtAccessToken as Secret,
      config.jwt.jwtExpiresIn as string
    );
    return {
      accessToken,
      refreshToken,
    };
  };
  export const authService = {
    loginUser,
    refreshToken
    
  };