import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Description from "../components/Description";

const Register = () => {
  const { user, setUser, signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);
  const validarDatos = () => {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (Object.values(user).includes("")) {
      toast.warn("Todos los campos son obligatorios");
      return false;
    } else if (!emailRegex.test(user.email)) {
      toast.error("Debes ingresar un mail correcto");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validarDatos()) signUp(user);
  };

  return (
    <>
      <Description />
      <div className="w-11/12 sm:w-7/12 mb bg-purple-700 overflow-hidden flex flex-col sm:flex-row relative rounded-2xl m-auto">
        <img
          src="../public/wave.svg"
          className="absolute rotate-180 w-full"
          alt=""
        />
        <div className="px-5 w-3/4 m-auto sm:py-5 sm:px-8 sm:w-2/4 relative z-40">
          <img src="../public/register.png" className="w-full" alt="" />
        </div>
        <div className="p-5 w-full sm:py-5 sm:px-8 sm:w-2/4 relative z-40 flex flex-col m-auto items-center">
          <h3 className="text-end text-gray-200 font-semibold text-xl">
            Register
          </h3>

          <form
            className="flex w-full flex-col gap-5 mt-10"
            onSubmit={handleOnSubmit}
          >
            {/* UserName */}
            <div className="flex w-full rounded-lg px-3 py-2.5 bg-gray-200 text-gray-500 text-xs">
              <div className="mr-4">
                <svg viewBox="0 0 448 512 " className="w-4 h-4 fill-pink-500">
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
              </div>

              <input
                type="text"
                name="userName"
                placeholder="UserName"
                className=" text-gray-500 text-xs bg-transparent placeholder:text-gray-500"
                value={user.userName}
                onChange={handleChange}
              />
            </div>
            {/* Email */}
            <div className="flex w-full rounded-lg px-3 py-2.5 bg-gray-200 text-gray-500 text-xs">
              <div className="mr-4">
                <svg viewBox="0 0 512 512" className="w-4 h-4 fill-pink-500">
                  <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                </svg>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="text-gray-500 text-xs bg-transparent placeholder:text-gray-500"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div className="flex w-full justify-between rounded-lg px-3 py-2.5 bg-gray-200">
              <div className="flex w-full">
                <div className="mr-4">
                  <svg viewBox="0 0 448 512 " className="w-4 h-4 fill-pink-500">
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="text-gray-500 text-xs bg-transparent placeholder:text-gray-500"
                  value={user.password}
                  onChange={handleChange}
                />
                <div className="">
                  <svg
                    viewBox="0 0 576 512"
                    className="w-4 h-4 fill-gray-500 cursor-pointer"
                  >
                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                  </svg>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="sm:w-5/12 mt-5 mx-auto bg-gray-300 shadow-lg text-sm text-gray-500 text-center px-2 py-1 rounded-lg"
            >
              <p>Register</p>
            </button>
          </form>

          <p className="text-gray-200 text-xs text-center mt-2">
            Have you got a count? Sign In
          </p>
        </div>
        <img
          src="../public/wavebis.svg"
          className="absolute w-full bottom-0"
          alt=""
        />
      </div>
    </>
  );
};

export default Register;
