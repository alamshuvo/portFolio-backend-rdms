import { NextFunction, Request, Response } from "express";

const notFound=(req:Request,res:Response,next:NextFunction)=>{

    res.status(404).json({
        success: false,
        message: "Not Found",
        error: {
            orginalUrl: req.originalUrl,
            method: req.method,
            message: "your requested path is not found ",
        }
    });
}

export default notFound;