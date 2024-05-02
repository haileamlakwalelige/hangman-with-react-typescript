// import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordGuess: string;
  reveal: boolean;
};

const HangmanWord = ({ guessedLetters, wordGuess, reveal=false }: HangmanWordProps): JSX.Element => {
  return (
    <div className="flex gap-4 text-[4rem] justify-center font-bold font-mono" style={{ textTransform: "uppercase" }}>
      {wordGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[.5rem] border-black">
          <span style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden" , color:!guessedLetters.includes(letter) && reveal ?"red":"black" }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
