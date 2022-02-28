import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class DeleteOneTaskController{
    async handle(request: Request, response: Response) {
const {id}=request.body;
if (!id) {
    throw new Error("ID is empity");
}

const taskDel = await prismaClient.getData.findFirst({where:{Task:{id:id}},include:{Info:true,Task:true}})
if (!taskDel) {
    throw new Error("Task does not exist into the database");
}

console.log(taskDel)

await prismaClient.task.delete({where:{id:id}})
await prismaClient.info.delete({where:{id:taskDel.Info.id}});
console.log("Delete Task")

return response.send({"message":`The task ${taskDel.Task.title} was deleted`})

    }

}
export{DeleteOneTaskController};