import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import OnBoard from "./components/OnBoard";
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import Home from "./components/Home";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<OnBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SingUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recover-password" element={<TextEditor />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
