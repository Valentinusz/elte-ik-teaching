import { Button, Stack, TextField } from "@mui/material";
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const UncontrolledLogin = ({ login }) => {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (usernameInput.current.value === "") {
      newErrors.username = "a";
    }

    if (passwordInput.current.value === "") {
      newErrors.password = "b";
    }

    setErrors(newErrors);

    return Object.keys(newErrors) === 0;
  };

  return (
    <Stack
      component="form"
      spacing={2}
      onSubmit={(event) => {
        console.log(usernameInput.current.value);
        event.preventDefault();

        if (validate()) {
          login();
        }
      }}
    >
      <TextField
        type="text"
        id="username"
        name="username"
        ref={usernameInput}
        defaultValue=""
        onChange={validate}
        label="Felhasználónév"
      />
      {errors.username && <span>{errors.username}</span>}
      <br />
      <TextField
        error={true}
        type="password"
        id="password"
        name="password"
        ref={passwordInput}
        defaultValue=""
        onChange={validate}
        label="Jelszó"
        helperText={errors.password}
      />
      <br />
      <Button variant="contained" type="submit">
        Elküld
      </Button>
    </Stack>
  );
};

export default UncontrolledLogin;
