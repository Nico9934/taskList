import React from "react";

const Task = () => {
  return (
    <div className="min-w-full bg-gray-200 hover:cursor-pointer hover:bg-purple-200 hover:translate-x-1 hover:transition-all shadow-md rounded-lg py-2 px-2 flex flex-col">
      <h3 className="font-poppins rounded-lg">Titulo de tarea</h3>
      <div className="flex gap-4 justify-between items-center">
        <p className="text-xs w-9/12 text-justify">
          Lorem ipsum dolor, at aut ullam qui, doloribus itaque. Ir a sacar a
          pasear a gale
        </p>
        <input type="checkbox" className="border border-purple-500 w-6 h-6" />
      </div>
    </div>
  );
};

export default Task;
