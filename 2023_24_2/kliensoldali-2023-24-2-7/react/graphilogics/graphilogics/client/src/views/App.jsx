import { GraphiLogics } from "./graphilogics/Graphilogics";
import PuzzleList from "./graphilogics/PuzzleList.jsx";
import NewPuzzle from "./graphilogics/NewPuzzle.jsx";
import Login from "./graphilogics/Login.jsx";
// import PuzzleList from "./PuzzleList.jsx";
// import NewPuzzle from "./NewPuzzle.jsx";
// import Login from "./Login.jsx";

function App() {
  return (
    <>
      <h1>GraphiLogics</h1>
      <PuzzleList/>
      <GraphiLogics />
        <NewPuzzle/>
        <Login/>
      {/*<NewPuzzle/>*/}
      {/*<Login/>*/}
    </>
  );
}

export default App;
