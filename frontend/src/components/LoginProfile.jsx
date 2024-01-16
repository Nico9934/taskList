import React from "react";
import { useAuth } from "../context/AuthContext";

const LoginProfile = () => {
  const { logout } = useAuth();

  return (
    <div className="w-4/5 m-auto sm:w-64 h-auto px-4 py-2 flex justify-between items-center bg-purple-700 bg-opacity-80 rounded-xl">
      <h3 className="font-oswald text-gray-200">UserName</h3>

      <img
        className="w-8 h-8 rounded-full overflow-hidden flex object-cover m-auto"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />

      <button
        className="
        sm:w-5/12 bg-gray-200 shadow-lg text-sm text-gray-500 text-center px-2 py-1 rounded-lg font-oswald hover:cursor-pointer hover:scale-105 transition-all"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default LoginProfile;
