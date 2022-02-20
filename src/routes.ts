import { CreateTaskController } from "@controllers/CreateTaskController";
import { FindAllTasksController } from "@controllers/FindAllTasksController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import { Router } from "express";

const router = Router();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const findAllTasksController = new FindAllTasksController();
router.post("/CreateTask",createTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
router.get("/GetData",findAllTasksController.handle);
export{router};