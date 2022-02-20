import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class FindAllTasksController {
  async handle(request: Request, response: Response) {
      const  allTasks = await prismaClient.task.findMany();

      const AllData = allTasks.map((task)=>({"id":task.id,"title":task.title,"completed":task.check,"infoId":task.info_Id}));
      console.log("All Tasks:")
      console.log(AllData);
      return response.json(AllData);
  }}
  export{FindAllTasksController};