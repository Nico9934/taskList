import express from "express";
import { authRequired } from "../middlerwares/validateToken.js";
import {
  getTask,
  deleteTask,
  editTask,
  getTasks,
  newTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task", authRequired, getTask);
router.post("/task", authRequired, newTask);
router.delete("/task:id", authRequired, deleteTask);
router.put("/task:id", authRequired, editTask);

export default router;
