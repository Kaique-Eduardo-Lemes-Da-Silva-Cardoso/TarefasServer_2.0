import { CreateTaskController } from "@controllers/CreateTaskController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import { Router } from "express";

const router = Router();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();

router.post("/CreateTask",createTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
export{router};