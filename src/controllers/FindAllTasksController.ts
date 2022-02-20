import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class FindAllTasksController {
  async handle(request: Request, response: Response) {
    const allTasks = await prismaClient.task.findMany({orderBy:[{created_at:"asc"}]});
    const AllInfo = await prismaClient.info.findMany({orderBy:[{created_at:"asc"}]});
    const infoIds = AllInfo.map((info) => ({ infoId: info.id }));
    const AllData = allTasks.map((task) => ({
      id: task.id,
      title: task.title,
      completed: task.check,
    }));
    function mixer() {
      if (AllData.length === infoIds.length) {
        const t = AllData.length;
        let i = 0;
        let object = [];
        while (i < t) {
          object.push({
            id: AllData[i].id,
            title: AllData[i].title,
            completed: AllData[i].completed,
            infoId: infoIds[i].infoId,
          });
          i++;
        }
        return object;
      }
    }
    const data = mixer();
    console.log("All Tasks:");
    console.log(data);

    return response.json(data);
  }
}

export { FindAllTasksController };
