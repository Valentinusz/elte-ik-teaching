import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Login = ({ login }) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [errors, setErrors] = useState({});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(usernameInputRef.current.value);
        console.log(passwordInputRef.current.value);

        const newErrors = {};

        if (usernameInputRef.current.value === "") {
          newErrors.username = "A felhasználónév értéke nem lehet üres!";
        }

        if (passwordInputRef.current.value === "") {
          newErrors.password = "A jelszó értéke nem lehet üres!";
        }

        setErrors(newErrors);
      }}
    >
      <label htmlFor="username">Felhasználónév: </label>
      <input type="text" id="username" name="username" defaultValue="" label="Felhasználónév" ref={usernameInputRef} />
      {errors.username && <span>{errors.username}</span>}
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input type="password" id="password" name="password" defaultValue="" label="Jelszó" ref={passwordInputRef} />
      {errors.password && <span>{errors.password}</span>}
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
