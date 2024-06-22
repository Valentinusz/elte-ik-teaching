import { Button, Input } from "@mui/material";
import useForm from "./useForm";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ControlledLogin3 = ({ login }) => {
  // const usernameInputRef = useRef();
  // const passwordInputRef = useRef();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const { username, password, credentials, setCredentials, errors } = useForm();

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
      <Input
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
      {errors.username && <span>{errors.username}</span>}
      <br />
      <label htmlFor="password">Jelszó: </label>
      <Input type="password" id="password" name="password" value={password} onChange={handleInput} label="Jelszó" />
      {errors.password && <span>{errors.password}</span>}
      <br />
      <Button type="submit"> Elküld</Button>
    </form>
  );
};

export default ControlledLogin3;
