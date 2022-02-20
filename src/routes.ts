import { CreateTaskController } from "@controllers/CreateTaskController";
import { Router } from "express";

const router = Router();
const createTaskController = new CreateTaskController()

router.post("/CreateTask",createTaskController.handle);
export{router};