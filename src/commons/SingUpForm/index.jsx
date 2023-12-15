import React, { useState } from "react";
import s from "../../components/SingUp/style.module.scss";
import Human from "../../assets/Human";
import Block from "../../assets/Block";
import SMS from "../../assets/SMS";
import CloseEye from "../../assets/CloseEye";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "../../state/user";

function SingUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleForgotYourPassword = () => {
    navigate("/recover-password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname === "/login") {
      setSubmitted(true);

      let missingFields1 = [];

      if (!data.email) {
        missingFields1.push("email");
      }
      if (!data.password) {
        missingFields1.push("password");
      }

      if (missingFields1.length > 0) {
        setError(`Complete the following fields: ${missingFields1.join(", ")}`);
      } else {
        setError("");

        axios
          .post(
            "http://localhost:3001/api/users/login",
            {
              email: data.email,
              password: data.password,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            dispatch(Login(res.data));
            navigate("home");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } else {
      setSubmitted(true);

      let missingFields = [];

      if (!data.username) {
        missingFields.push("username");
      }
      if (!data.email) {
        missingFields.push("email");
      }
      if (!data.password) {
        missingFields.push("password");
      }

      if (missingFields.length > 0) {
        setError(`Complete the following fields: ${missingFields.join(", ")}`);
      } else {
        setError("");
        axios
          .post("http://localhost:3001/api/users/register", data, {
            withCredentials: true,
          })
          .then((resp) => {
            axios.post(
              `http://localhost:3001/api/nodeMailer/accountConfirmation/${resp.data.email}`
            );
          })
          .catch((err) => {
            // setError(err.response.data.error);
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.divContainer}>
        <div className={s.visual}>
          <p className={`${s.text3} ${s.row2}`}>
            <p className={s.green}>let</p> {"user = {"}
            {pathname === "/register" ? " name: " : ""}
            {pathname === "/register" ? (
              <p className={s.rose}>{`'${data.username}'`}</p>
            ) : (
              ""
            )}
          </p>
          <p className={`${s.text3} ${s.row2}`}>
            <p>email:</p>
            <p className={s.rose}>{`'${data.email}'`}</p>
          </p>
          <p className={`${s.text3} ${s.row2}`}>
            <p>password:</p>
            <p className={s.rose}>{`'${"*".repeat(data.password.length)}'`}</p>
            <p>{"}"}</p>
          </p>
        </div>
        {pathname === "/register" ? (
          <div className={s.data}>
            <div className={s.circle}>
              <Human />
            </div>
            <input
              className={s.none}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={data.username}
              onChange={handleInputChange}
              title="Please enter your username."
            />
          </div>
        ) : (
          ""
        )}
        <div className={s.data}>
          <SMS />
          <input
            className={s.none}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInputChange}
            title="Please enter your email address."
          />
        </div>
        <div className={s.data}>
          <Block />
          <input
            className={s.none}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInputChange}
            title="Please enter your password."
          />
          <CloseEye />
        </div>
        {pathname === "/register" ? (
          ""
        ) : (
          <button onClick={handleForgotYourPassword} className={`${s.btn2}`}>
            forgot your password()
          </button>
        )}
        <div>
          {submitted && error ? <p style={{ margin: 0 }}>{error}.</p> : ""}
        </div>
      </div>
      <div className={s.left}>
        <button className={`${s.text3} ${s.btn}`}>
          {pathname === "/register" ? "SING UP" : "LOGIN"}
        </button>
      </div>
    </form>
  );
}

export default SingUpForm;
