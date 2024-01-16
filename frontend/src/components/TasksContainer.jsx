import React from "react";
import TaskList from "./TaskList";
import LoginProfile from "./LoginProfile";

const TasksContainer = () => {
  return (
    <div className="flex w-full flex-col justify-center p-2">
      <LoginProfile />;
      <div className="flex center justify-center gap-10 p-5 w-4/5 bg-purple-700 bg-opacity-80 rounded-lg h-auto m-auto flex-col">
        <h3 className="text-4xl text-start text-gray-300 font-oswald">
          Tareas
        </h3>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
