import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class FindAllTasksController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    // const allTasks = await prismaClient.task.findMany({where:{user_id:user_id},orderBy:[{created_at:"asc"}]});
    // const AllInfo = await prismaClient.info.findMany({orderBy:[{created_at:"asc"}]});
    // const infoIds = AllInfo.map((info) => ({ infoId: info.id }));
    // const AllData = allTasks.map((task) => ({
    //   id: task.id,
    //   title: task.title,
    //   completed: task.check,
    // }));
    const getData = await prismaClient.getData.findMany({
      where: { userId: user_id },
      include: { Task: true, Info: true },
    });

    const allData = getData.map((news) => ({
      id: news.Task?.id,
      title: news.Task?.title,
      completed: news.Task?.check,
      infoId: news.Info?.id,
    }));

    // function mixer() {
    //   if (AllData.length === infoIds.length) {
    //     const t = AllData.length;
    //     let i = 0;
    //     let object = [];
    //     while (i < t) {
    //       object.push({
    //         id: AllData[i].id,
    //         title: AllData[i].title,
    //         completed: AllData[i].completed,
    //         infoId: infoIds[i].infoId,
    //       });
    //       i++;
    //     }
    //     return object;
    //   }
    // }
    // const data = mixer();
    // console.log("All Tasks:");
    // console.log(data);
    // console.log("All Tasks:");
    // console.log(allTasks);
    // console.log("All info:");
    // console.log(AllInfo);

    // return response.json(data);
    return response.json(allData);
  }
}

export { FindAllTasksController };
