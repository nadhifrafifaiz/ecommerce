import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Login from './pages/Login';
import { checkLogin } from './features/users/usersSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const userToken = localStorage.getItem("user_token")
  const userGlobal = useSelector((state) => state.users.user);



  useEffect(() => {
    dispatch(checkLogin(userToken))
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        {
          userGlobal.id === '' ?
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} /></>

            : null
        }
      </Routes>
    </div>
  );
}

export default App;