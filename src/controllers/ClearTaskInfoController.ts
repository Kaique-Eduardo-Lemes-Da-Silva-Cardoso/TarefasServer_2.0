import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class ClearTaskInfoController{
    async handle(request: Request, response: Response) {
const task = await prismaClient.task.deleteMany({});
const info =await prismaClient.info.deleteMany({});
return response.status(200);
    }
}
export{ClearTaskInfoController};