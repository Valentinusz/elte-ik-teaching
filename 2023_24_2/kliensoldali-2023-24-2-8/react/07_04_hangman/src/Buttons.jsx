const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

const Buttons = ({ tips, handleTip }) => {
  return (
    <div id="betuk">
      {buttonText.split("").map((letter) => {
        return (
          <button key={letter} disabled={tips.includes(letter)} onClick={() => handleTip(letter)}>
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
