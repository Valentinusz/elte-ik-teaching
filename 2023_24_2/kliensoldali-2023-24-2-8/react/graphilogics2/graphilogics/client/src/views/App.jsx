import { GraphiLogics } from "./graphilogics/Graphilogics";
import PuzzleList from "./graphilogics/PuzzleList.jsx";
import CreatePuzzle from "./graphilogics/CreatePuzzle.jsx";
import Login from "./graphilogics/Login.jsx";

function App() {
  return (
    <>
      <h1>GraphiLogics</h1>
      <GraphiLogics />
      <PuzzleList/>
        <Login/>
        <CreatePuzzle/>
    </>
  );
}

export default App;
