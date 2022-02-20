import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class DeleteOneTaskController{
    async handle(request: Request, response: Response) {
const {id}=request.body;
if (!id) {
    throw new Error("ID is empity");
}

const taskDel = await prismaClient.task.findFirst({where:{id:id}})
if (!taskDel) {
    throw new Error("Task does not exist into the database");
}

const DeleteTask = await prismaClient.task.delete({where:{id:id}})
console.log("Delete Task")
console.log(DeleteTask);
return response.send({"message":`The task ${taskDel.title} was deleted`})

    }

}
export{DeleteOneTaskController};