import mongoose from "mongoose";
import User from "../models/userModel.js";
import Task from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  const { id } = req.user;

  const tasksFound = await Task.find();
  res.send(tasksFound);
};
export const getTask = (req, res) => {};

export const newTask = async (req, res) => {
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

export const deleteTask = (req, res) => {
  res.send("Eliminando una tarea");
};
export const editTask = (req, res) => {
  res.send("Editando esta tarea");
};
