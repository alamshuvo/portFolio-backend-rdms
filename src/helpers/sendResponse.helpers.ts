import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  {
    statusCode,
    success,
    message,
    meta,
    data,
  }: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: { page: number; limit: number; total: number };
    data: T | T[] | null | undefined;
  }
) => {
  res.status(statusCode).json({
    statusCode,
    success,
    message,
    meta: meta ?? null,
    data: data ?? null,
  });
};

export default sendResponse;
