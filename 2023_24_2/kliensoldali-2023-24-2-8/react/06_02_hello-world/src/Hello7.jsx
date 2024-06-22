// const obj = {name: "", times: 5}
// obj.name, obj.times
// const {name, times} = {name: "", times: 5}

/**
 *
 * @param {{name: string, times: number, children: React.ReactNode}} props
 * @returns
 */
export default function Hello7({ name, times = 1, children }) {
  console.log(children);

  return (
    <>
      {Array.from({ length: times }).map((_, index) => {
        return (
          <div key={index}>
            {name ? <h1>Helló {name}!</h1> : <p>Nincs kit üdvözölni!</p>}
          </div>
        );
      })}
      {children}
      <hr />
    </>
  );
}
