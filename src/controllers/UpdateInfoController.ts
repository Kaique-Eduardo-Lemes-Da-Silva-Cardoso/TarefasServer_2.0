import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class UpdateInfoController {
  async handle(request: Request, response: Response) {
    const { infoId, text } = request.body;
    const UpdateInfo = await prismaClient.info.update({
        where:{id:infoId},
        data:{text:text}
    })
    console.log("Update Info")
    console.log(UpdateInfo);
    return response.status(200).send({"message":`${UpdateInfo.text} was updated`})
  }
}
export { UpdateInfoController };
