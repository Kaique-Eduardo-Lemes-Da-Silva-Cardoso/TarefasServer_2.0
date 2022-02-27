import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.body;
    const getdata = await prismaClient.getData.findMany({
      where: { userId: userId },
      include: { Task: true, Info: true },
    });
    getdata.map(async (i) => {
      await prismaClient.task.delete({ where: { id: i.Task?.id } });
      await prismaClient.info.delete({ where: { id: i.Info?.id } });
    });
     await prismaClient.user.delete({ where: { id: userId } });
  }
}
export { DeleteUserController };
