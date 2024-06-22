export default function Hello3b() {
  let name = "";

  return (
    <>
      {name ? <h1>Helló {name}!</h1> : <p>Nincs kit üdvözölni!</p>}
      <hr />
    </>
  );
}
