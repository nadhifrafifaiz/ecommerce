import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../features/users/usersSlice";

function Navbar() {
  const userGlobal = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-300 flex justify-center h-16 gap-8">
      {userGlobal.id ? (
        <>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            File Upload
          </button>
          <button
            onClick={() => {
              navigate("/users");
            }}
          >
            Users
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("user_token");
              dispatch(resetUser());
              alert("Logout Berhasil");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Navbar;
