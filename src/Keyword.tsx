import React from "react";

type KeywordProps = {
  inActiveLetters: string[];
  activeLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

const Keyword = ({ addGuessedLetter, activeLetters, inActiveLetters, disabled=false }: KeywordProps): JSX.Element => {
  const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleKeyPress = (key: string): void => {
    addGuessedLetter(key);
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-5 mt-3 uppercase">
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inActiveLetters.includes(key);

        // Determine button class based on activity state
        let buttonClass = "uppercase font-bold border-[3px] border-black lg:min-w-[50px] rounded duration-150 cursor-pointer text-black focus:[hsl(200, 100%, 75%)] aspect-square";
        if (isActive) {
          buttonClass += " btn-active";
        } else if (isInactive) {
          buttonClass += " btn-inactive";
        }

        return (
          <button disabled={isInactive || isActive || disabled} key={index} onClick={() => handleKeyPress(key)} className={buttonClass}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyword;
