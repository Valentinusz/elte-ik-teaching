import { useDispatch, useSelector } from "react-redux";
import { deleteHaiku, selectHaiku } from "../../store/store.js";

export const HaikuList = () => {
  const dispatch = useDispatch();
  const haikus = useSelector(state => state.haiku.haikus)

  console.log(haikus);

  return (
    <div>
      <h2>Haiku list</h2>
        {haikus.map((haiku, index) => (
          <div key={index}>
            <pre  onClick={() => dispatch(selectHaiku(index))}>{haiku}</pre>
            <button onClick={() => dispatch(deleteHaiku(index))}>Remove</button>
          </div>
        ))}
    </div>
  );
};
