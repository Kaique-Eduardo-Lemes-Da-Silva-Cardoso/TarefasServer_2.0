import { CreateTaskController } from "@controllers/CreateTaskController";
import { DeleteOneTaskController } from "@controllers/DeleteOneTaskController";
import { FindAllTasksController } from "@controllers/FindAllTasksController";
import { UpdateInfoController } from "@controllers/UpdateInfoController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import { Router } from "express";

const router = Router();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const findAllTasksController = new FindAllTasksController();
const deleteOneTaskController = new DeleteOneTaskController();
const updateInfoController = new UpdateInfoController();
router.post("/CreateTask",createTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
router.get("/GetData",findAllTasksController.handle);
router.post("/DeleteOneTask",deleteOneTaskController.handle);
router.post("/UpdateInfo",updateInfoController.handle);
export{router};