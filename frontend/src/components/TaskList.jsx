import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
