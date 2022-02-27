import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;
    const user_id = request.user_id;

   
    const newTask = await prismaClient.getData.create({
      data: {
        User:{connect:{id:user_id}},
        Task: {
          create: {
            title: title,
          },
        },
        Info:{create:{text:""}}
      },include:{Task:true,Info:true},
    });
    

    const created = {
      id: newTask.Task?.id,
      title: newTask.Task?.title,
      completed: newTask.Task?.check,
      infoId: newTask.Info?.id,
    };

    console.log("New Task");
    console.log(newTask);
   
    console.log("Created");
    console.log(created);

    return response.json(created);
    
  }
}
export { CreateTaskController };
