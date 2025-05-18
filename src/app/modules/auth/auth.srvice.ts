import { UserRole } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import bcrypt from 'bcrypt'
import config from "../../../config";
import { JwtPayload, Secret } from "jsonwebtoken";
import generateToken from "../../../helpers/generateToken";
import verifyToken from "../../../helpers/verifyToken";
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
    const userData = await prisma.admin.findFirstOrThrow({
      where: {
        email: decodedData?.email,
        role: UserRole.ADMIN,
      },
    });
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