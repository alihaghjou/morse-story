"use client";

import { useState } from "react";

export default function Header() {
  const [value, setValue] = useState("");
  const [char, setChar] = useState(0);
  var HeaderTxt = "Let's Do Some Fun with";
  var speed = 50;

  setTimeout(() => {
    if (char < HeaderTxt.length) {
      setValue(value + HeaderTxt.charAt(char));
      setChar(char + 1);
    }
  }, speed);

  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-2 justify-center items-center text-xl">
        {value}
        {HeaderTxt === value ? (
          <span className="animate-in font-semibold text-3xl underline">
            Morse
          </span>
        ) : null}
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
