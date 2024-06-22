export default function Hello4() {
  const name = "asd";
  const times = 3;

  const elements = [];

  for (let i = 0; i < times; i++) {
    elements.push(
      <div key={i}>
        {name ? <h1>Helló {name}!</h1> : <p>Nincs kit üdvözölni!</p>}
        <hr />
      </div>
    );
  }

  return elements;
}
