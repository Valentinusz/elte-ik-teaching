import { useState } from "react";
import useForm from "./useForm";

import styles from "./login.module.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Login = ({ login }) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const errors = {};

  // if (username === "") {
  //   errors.username = "A felhasználónév nem lehet üres!";
  // }

  // if (password === "") {
  //   errors.password = "A jelszó nem lehet üres!";
  // }
  const { username, password, setUsername, setPassword, isValid, errors } = useForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (isValid) {
          login(username);
        }
      }}
    >
      <label htmlFor="username">Felhasználónév: </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        label="Felhasználónév"
      />
      {errors.username && <span className={styles.error}>{errors.username}</span>}
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        label="Jelszó"
      />
      {errors.password ? <span>{errors.password}</span> : null}
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
