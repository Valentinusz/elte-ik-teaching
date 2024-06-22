export default function Hello3() {
  let name = "s";

  if (!name) {
    return (
      <>
        <p>Nincs kit üdvözölni!</p>
        <hr />
      </>
    );
  }

  return (
    <>
      <h1>Helló {name}!</h1>
      <hr />
    </>
  );
}
