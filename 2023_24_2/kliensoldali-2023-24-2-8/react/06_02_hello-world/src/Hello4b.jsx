export default function Hello4b() {
  const name = "asd";
  const times = 3;

  return (
    <>
      {Array.from({ length: times }).map((_, index) => {
        return (
          <div key={index}>
            {name ? <h1>Helló {name}!</h1> : <p>Nincs kit üdvözölni!</p>}
          </div>
        );
      })}
      <hr />
    </>
  );
}
