"use client";

import { translateFunc } from "@/utils/supabase/Translate";
import { useState } from "react";

export default function TextStory({
  para,
  isAuth,
}: {
  para: string;
  isAuth: boolean;
}) {
  const [paragraph, setPara] = useState({
    text: translateFunc("text-morse", para),
    textType: "morse",
  });

  function handleTranslatePara() {
    if (paragraph.textType === "morse") {
      setPara({ text: para, textType: "text" });
    } else {
      setPara({
        text: translateFunc("text-morse", para),
        textType: "morse",
      });
    }
  }

  return (
    <>
      <p>{paragraph.text}</p>
      {isAuth && (
        <button onClick={handleTranslatePara}>
          {paragraph.textType === "morse" ? (
            <span>Translate</span>
          ) : (
            <span>Back</span>
          )}
        </button>
      )}
    </>
  );
}
