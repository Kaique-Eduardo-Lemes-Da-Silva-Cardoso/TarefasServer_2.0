import { AlthenticateUserController } from "@controllers/AlthenticateUserController";
import { CreateTaskController } from "@controllers/CreateTaskController";
import { CreateUserController } from "@controllers/CreateUserController";
import { DeleteOneTaskController } from "@controllers/DeleteOneTaskController";
import { FindAllTasksController } from "@controllers/FindAllTasksController";
import { GetInfoTextController } from "@controllers/GetInfoTextController";
import { UpdateInfoController } from "@controllers/UpdateInfoController";
import { UpdateTaskController } from "@controllers/UpdateTaskController";
import { ensureAuthenticated } from "@middleware/ensureAuthenticated";
import { Router } from "express";

const router = Router();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const findAllTasksController = new FindAllTasksController();
const deleteOneTaskController = new DeleteOneTaskController();
const updateInfoController = new UpdateInfoController();
const getInfoTextController = new GetInfoTextController();
const createUserController = new CreateUserController();
const althenticateUserController = new AlthenticateUserController();
router.post("/CreateTask",ensureAuthenticated,createTaskController.handle);
router.post("/UpdateTask",updateTaskController.handle);
router.get("/GetData",ensureAuthenticated,findAllTasksController.handle);
router.post("/InfoData",getInfoTextController.handle);
router.post("/DeleteOneTask",deleteOneTaskController.handle);
router.post("/UpdateInfo",updateInfoController.handle);
router.post("/CreateUser", createUserController.handle);
router.post("/Login",althenticateUserController.handle)
export{router};