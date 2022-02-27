import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class FindAllTasksController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
   
    const getData = await prismaClient.getData.findMany({
      where: { userId: user_id },
      include: { Task: true, Info: true },orderBy:{Task:{created_at:"asc"}}
    });

    const allData = getData.map((news) => ({
      id: news.Task?.id,
      title: news.Task?.title,
      completed: news.Task?.check,
      infoId: news.Info?.id,
    }));

    
    return response.json(allData);
  }
}

export { FindAllTasksController };
