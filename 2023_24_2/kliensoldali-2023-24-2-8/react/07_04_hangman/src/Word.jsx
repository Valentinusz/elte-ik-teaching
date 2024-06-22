import cn from "classnames";
import Letter from "./Letter";

/**
 *
 * @param {{word: string, won: boolean, isOver: boolean, tips: string[]}} props
 * @returns
 */
const Word = ({ word, won, isOver, tips }) => {
  return (
    <div id="szo" className={cn({ nyer: won })}>
      {word.split("").map((letter, index) => (
        <Letter
          key={index}
          visible={isOver || tips.includes(letter)}
          missing={isOver && !won && !tips.includes(letter)}
        >
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default Word;
