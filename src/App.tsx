/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import word from "./words.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyword from "./Keyword";

const getWord = () => {
  return word[Math.floor(Math.random() * word.length)];
};

export default function App(): JSX.Element {
  const [wordGuess, setWordGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 7;
  const isWinner = wordGuess.split("").every((letter) =>
    guessedLetters.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string): void => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      const key = e.key.toLowerCase();
      if (key !== "enter") return;

      e.preventDefault();
      setWordGuess(getWord())
      window.location.reload(); // Reload the page
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="max-w-[800px] flex flex-col gap-[2rem] mx-auto items-center my-10">
      {isWinner && "Winner! Refresh to try again"}
      {isLoser && "Nice Try! Refresh to try again"}

      <div className="text-[2rem] items-center text-center ">
        Lose Win
        <HangmanDrawing incorrectLetters={incorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordGuess={wordGuess}
        />
        <div
          style={{ alignSelf: "stretch" }}
          className="flex flex-row justify-center items-center"
        >
          <Keyword
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordGuess.includes(letter)
            )}
            inActiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
}
