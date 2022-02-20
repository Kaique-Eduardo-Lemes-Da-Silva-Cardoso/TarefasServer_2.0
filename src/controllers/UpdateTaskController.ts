import { prismaClient } from "@database/prismaClient";
import { Request, Response } from "express";
class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id, title, check } = request.body;

    const taskData = await prismaClient.task.findFirst({
      where: {
        id: id,
      },
    });

    const taskUpdate = await prismaClient.task.update({
      where: { id: id },
      data: {
        title: title != "" ? title : taskData?.title,
        check: check != null ? check : taskData?.check,
      },
    });

    console.log("Task Data:");
    console.log(taskData);
    console.log("Task Update");
    console.log(taskUpdate);
    return response
      .status(200)
      .send({
        message: `Updated Title: ${taskUpdate.title} check: ${taskUpdate.check}`,
      });
  }
}
export { UpdateTaskController };
