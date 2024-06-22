export default function RandomColorDiv({ children }) {
  const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  console.log(randomColor);

  return (
    <div style={{ backgroundColor: randomColor, height: "2rem" }}>
      {children} {randomColor}
    </div>
  );
}
