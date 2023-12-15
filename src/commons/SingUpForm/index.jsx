import React, { useState } from "react";
import s from "../../components/SingUp/style.module.scss";
import Human from "../../assets/Human";
import Block from "../../assets/Block";
import SMS from "../../assets/SMS";
import CloseEye from "../../assets/CloseEye";
import axios from "axios";

function SingUpForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          setError(err.response.data.error);
        });
    }
  };
  console.log(data.password.length);
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.divContainer}>
        <div className={s.visual}>
          <p className={`${s.text3} ${s.row2}`}>
            <p className={s.green}>let</p> user = {`  { name: `}{" "}
            <p className={s.rose}>{`'${data.username}'`}</p>
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
        <div>
          {submitted && error ? <p style={{ margin: 0 }}>{error}.</p> : ""}
        </div>
      </div>
      <div className={s.left}>
        <button className={`${s.text3} ${s.btn}`}>SING UP</button>
      </div>
    </form>
  );
}

export default SingUpForm;
