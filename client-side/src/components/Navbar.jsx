import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userGlobal = useSelector((state) => state.user.user);

  return (
    <div className="bg-black flex flex-row justify-between items-center px-10 h-20">
      <div className="text-white">
        <p className="font-semibold text-lg">Ecommerce Wannabe</p>
      </div>
      <div className="text-white flex flex-row items-center gap-10">
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
        {userGlobal.id > 0 ? (
          <>
            {userGlobal.imagePath ? (
              <img
                src={`http://localhost:8001/${userGlobal.imagePath}`}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
            <div>
              <p
                onClick={() => {
                  dispatch(logoutUser());
                }}
                className="hover:cursor-pointer"
              >
                Logout
              </p>
            </div>
          </>
        ) : (
          <>
            <p
              className="hover:cursor-pointer"
              onClick={() => navigate("/user/register")}
            >
              Register
            </p>
            <p
              className="hover:cursor-pointer"
              onClick={() => navigate("/user/login")}
            >
              Login
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
