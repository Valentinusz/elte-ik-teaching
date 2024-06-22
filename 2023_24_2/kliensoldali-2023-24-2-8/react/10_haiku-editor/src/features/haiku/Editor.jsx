import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { changeText } from "../../store/store";

export const Editor = () => {
  const editorValue = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const isHaiku = false;
  return (
    <div>
      <textarea
        value={editorValue}
        onChange={(event) => {
          dispatch(changeText(event.target.value));
        }}
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
      ></textarea>
      <p>Vowels per row: 1,2,3</p>
      <button>Add</button>
      <button>Save</button>
    </div>
  );
};
