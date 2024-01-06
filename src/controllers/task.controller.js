import mongoose from "mongoose";
import User from "../models/userModel.js";
import Task from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  const { id } = req.user;

  const tasks = await Task.find({ user: id }).populate("user");
  if (!tasks)
    return res.status(401).json({ message: "Don´t tasks exist for you" });
  res.json(tasks);
};
export const getTask = async (req, res) => {
  const { id } = req.params;

  const taskFound = await Task.findById(id).populate("user");
  if (!taskFound) return res.status(401).json({ message: "Task don´t found" });
  console.log(taskFound);
  res.json({ taskFound });
};

export const createTask = async (req, res) => {
  const { title, description, date, complete } = req.body;
  const { id } = req.user;

  try {
    const userFound = await User.findById(id);

    if (!userFound) res.status(401).json({ message: "You haven´t permission" });

    const newTask = new Task({
      title,
      description,
      date,
      complete,
      user: id,
    });

    const savedTask = await newTask.save();
    res.send(savedTask);
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  // const taskFound = await Task.findById(id).where("user").equals(req.user.id);
  const taskFound = await Task.findByIdAndDelete(id);
  if (!taskFound)
    return res.status(401).json({ message: "This task doesn´t exist" });
  try {
    res.send(`Task removed succesfully`);
  } catch (error) {
    console.log(error.message);
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const taskFound = await Task.findById(id).where("user").equals(req.user.id);
  if (!taskFound)
    return res.status(401).json({ message: "This task doesn´t exist" });
  try {
    (taskFound.title = req.body.title || taskFound.title),
      (taskFound.description = req.body.description || taskFound.description),
      (taskFound.date = req.body.date || taskFound.date),
      (taskFound.complete = req.body.complete || taskFound.complete),
      await taskFound.save();
    res.send(taskFound);
  } catch (error) {
    console.log(error.message);
  }
};
