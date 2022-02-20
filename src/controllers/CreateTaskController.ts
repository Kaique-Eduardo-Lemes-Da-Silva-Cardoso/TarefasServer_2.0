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


const created = {
  "id": task.id,
  "title": task.title,
  "completed": task.check,
  "infoId":info.id
}



    console.log("Task");
    console.log(task);
    console.log("info");
    console.log(info);
    console.log("Created");
    console.log(created);
    

    return response.json(created);
  }
}
export{CreateTaskController};
