import Hello1 from "./Hello1";
import Hello2 from "./Hello2";
import Hello3 from "./Hello3";
import Hello3b from "./Hello3b";
import Hello4 from "./Hello4";
import Hello4b from "./Hello4b";
import Hello6 from "./Hello6";
import Hello7 from "./Hello7";

export default function App() {
  const asd = "asdasd";

  console.log(asd);

  return (
    <>
      <Hello1 />
      <Hello1></Hello1>
      <Hello2 />
      <Hello3 />
      <Hello3b />
      <Hello4 />
      <Hello4b />
      <Hello6 name="Bálint" times={5}></Hello6>
      <Hello6 name="asd" times={2}></Hello6>
      <Hello7>
        <p>A small greeting for you!</p>
      </Hello7>
    </>
  );
}
