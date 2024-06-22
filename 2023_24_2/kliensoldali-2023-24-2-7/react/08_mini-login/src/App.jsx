import { useState } from "react";
import Login from "./Login";
import Private from "./Private";
import { Button } from "@mui/material";
import ControlledLogin from "./ControlledLogin";
import ControlledLogin2 from "./ControlledLogin2";
import ControlledLogin3 from "./ControlledLogin3";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (name) => {
    setLoggedInUser(name);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser !== null ? (
        <Private user={loggedInUser} logout={handleLogout} />
      ) : (
        <>
          {/* <Login /> <ControlledLogin />  */}
          <ControlledLogin2 login={handleLogin} />
          <ControlledLogin3 />
        </>
      )}
    </div>
  );
}

export default App;
