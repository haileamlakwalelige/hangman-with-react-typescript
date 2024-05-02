import React from "react";

const BodyPart = {
  HEAD: (
    <div className="w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[45px] right-[-20px]" />
  ),
  BODY: (
    <div className="w-[10px] h-[50px] bg-black absolute top-[90px] right-0" />
  ),
  RightArm: (
    <div
      className="w-[50px] h-[10px] bg-black absolute top-[120px] right-[-50px]"
      style={{ transformOrigin: "left bottom", rotate: "-30deg" }}
    />
  ),
  LeftArm: (
    <div
      className="w-[50px] h-[10px] bg-black absolute top-[124px] right-[-0px]"
      style={{ transformOrigin: "right top", rotate: "30deg" }}
    />
  ),
  Leg: (
    <div className="w-[10px] h-[50px] bg-black absolute top-[130px] right-0" />
  ),
  RightLeg: (
    <div
      className="w-[50px] h-[10px] bg-black absolute top-[160px] right-[-40px]"
      style={{ transformOrigin: "left bottom", rotate: "-220deg" }}
    />
  ),
  LeftLeg: (
    <div
      className="w-[50px] h-[10px] bg-black absolute top-[178px] right-[7px]"
      style={{ transformOrigin: "right top", rotate: "220deg" }}
    />
  )
};

const HangmanDrawing = ({ incorrectLetters }: { incorrectLetters: number }): JSX.Element => {
  const bodyParts = Object.values(BodyPart).slice(0, incorrectLetters);

  return (
    <div className="flex justify-center items-center">
        <div className="relative">
      {bodyParts}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[230px] bg-black ml-[120px]" />
      <div className="h-[270px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
    </div>
  );
};

export default HangmanDrawing;
