import { Request, Response } from "express";

export default class ResponseHandler {

    static ReturnResponse(
        type: "Success" | "Error",
        message: string,
        statusCode: number,
        objectResult: object,
        res: Response
    ): Response {
        
        let objectResponse: object = {};
        if (objectResponse != null) {
            objectResponse = {
                type: type,
                message: message,
                statusCode: statusCode,
                objectResult: objectResult
            };
        } else {
            objectResponse = {
                type: type,
                message: message,
                statusCode: statusCode
            }
        }

        return res.status(statusCode).send(objectResponse);
    }
}