import styles from "./Editor.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addHaiku,
  changeText,
  modifyHaiku,
  selectEditorValue,
  selectRowLengths,
  selectValid
} from "../../store/store.js";

export const Editor = () => {
  // selector: állapottér egy részére iratkozik fel
  const editorValue = useSelector(selectEditorValue);

  // dispatch-el lehet actionöket beküldeni
  const dispatch = useDispatch();
  const rowLengths = useSelector(selectRowLengths);
  const isHaiku = useSelector(selectValid);

  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        value={editorValue}
        className={isHaiku ? styles.good : styles.wrong}
        onChange={ev => dispatch(changeText(ev.target.value))}
      ></textarea>
      <p>Vowels per row: {rowLengths.join(",")}</p>
      <button disabled={!isHaiku} onClick={() => {
        dispatch(addHaiku())
      }}>Add</button>
      <button disabled={!isHaiku} onClick={() => dispatch(modifyHaiku())}>Save</button>
    </div>
  );
};
