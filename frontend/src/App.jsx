import "./App.css";
import Description from "./components/Description.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider, { useAuth } from "./context/AuthContext.jsx";
import { useEffect, useState } from "react";
import TasksContainer from "./components/TasksContainer.jsx";
import LoginProfile from "./components/LoginProfile.jsx";

function App() {
  const [descriptionShow, setDescriptionShow] = useState(false);

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="bg-[url('https://www.shutterstock.com/image-vector/social-media-doodle-seamless-pattern-600nw-1931497916.jpg')]  w-full min-h-svh flex flex-col sm:flex-row justify-center">
            <Routes>
              {/* <Route path="/" element={<Login />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/tasks" element={<TasksContainer />} />
              <Route path="/add-task" element={<h2>Agregar una tarea</h2>} />
              <Route
                path="/tasks/:id"
                element={<h2>Actualizando una tarea</h2>}
              />
              <Route path="/profile" element={<h2>Perfil del usuario</h2>} />
            </Routes>
          </div>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
