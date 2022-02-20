import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;
    
    const task = await prismaClient.task.create({
      data: {
        title: title,
        
      },
    });
    const info = await prismaClient.info.create({
      data: { text: "",task_id:task.id },
    });
    console.log("info");
    console.log(info);
    console.log("Task");
    console.log(task);

    return response.json(task);
  }
}
export{CreateTaskController};
