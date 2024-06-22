export default function Hello3() {
  let name = "s";

  let content;

  if (!name) {
    content = <p>Nincs kit üdvözölni!</p>
  } else {
    content = <h1>Helló {name}!</h1>;
  }

  return (
    <>
      {content}
      <hr />
    </>
  );
}
