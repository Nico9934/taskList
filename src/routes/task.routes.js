import express from "express";
import { authRequired } from "../middlerwares/validateToken.js";

const router = express.Router();

router.get("/tasks", authRequired, (req, res) => {
  try {
  } catch (error) {}
  res.send("Desde enrutador de tareas");
});
router.get("/task");

export default router;
