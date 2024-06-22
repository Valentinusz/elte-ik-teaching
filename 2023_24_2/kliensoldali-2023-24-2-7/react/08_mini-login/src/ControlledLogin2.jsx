import { useState } from "react";

import styles from "./login.module.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ControlledLogin2 = ({ login }) => {
  // const usernameInputRef = useRef();
  // const passwordInputRef = useRef();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { username: username, password } = credentials;

  const errors = {};

  if (username === "") {
    errors.username = "A felhasználónév nem lehet üres.";
  }

  if (password === "") {
    errors.password = "A jelszó nem lehet üres.";
  }

  const handleInput = (event) => {
    // event -> inputevent
    // inputevent -> input
    // input -> username
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (Object.keys(errors).length === 0) {
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
          // setCredentials({ ...credentials, username: event.target.value });
          handleInput(event);
        }}
        label="Felhasználónév"
      />
      {errors.username && <span className={styles.error}>{errors.username}</span>}
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input type="password" id="password" name="password" value={password} onChange={handleInput} label="Jelszó" />
      {errors.password && <span className={styles.error}>{errors.password}</span>}
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default ControlledLogin2;
