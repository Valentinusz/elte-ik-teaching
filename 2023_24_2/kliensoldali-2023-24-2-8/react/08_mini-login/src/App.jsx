import { useState } from "react";
import Login from "./Login";
import Private from "./Private";
import UncontrolledLogin from "./UncontrolledLogin";

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
      <button onClick={() => handleLogin("asd")}>Be</button>
      <button onClick={handleLogout}>Ki</button>
      {loggedInUser === null ? (
        <>
          <Login login={handleLogin} />
          <UncontrolledLogin login={handleLogin} />
        </>
      ) : (
        <Private />
      )}
    </div>
  );
}

export default App;
