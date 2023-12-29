import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OnBoard from "./components/OnBoard";
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import Home from "./components/Home";
import TextEditor from "./components/TextEditor";
import { login } from "./state/user";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          const userData = {
            username: res.data.username,
            email: res.data.email,
            isConfirmed: res.data.isConfirmed,
          };
          dispatch(login(userData));
        }
      })
      .catch(() => {});
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recover-password" />
      </Routes>
    </Router>
  );
}
export default App;
