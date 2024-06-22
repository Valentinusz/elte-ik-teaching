import { useState } from "react";

function generate() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
}

export default function RandomColorDiv({ children }) {
  const [randomColor, setRandomColor] = useState(generate());

  return (
    <div onClick={() => setRandomColor(generate())} style={{ backgroundColor: randomColor, height: "2rem" }}>
      {children} {randomColor}
    </div>
  );
}
