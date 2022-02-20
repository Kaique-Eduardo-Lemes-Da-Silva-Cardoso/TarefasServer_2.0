import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class GetInfoTextController{
    async handle(request: Request, response: Response) {
        const {infoId} = request.body;
        const infoData = await prismaClient.info.findFirst({
            where:{
                id:infoId
            }
        })
        const text = infoData?.text;
        return response.json(text)
    }
}
export{GetInfoTextController};