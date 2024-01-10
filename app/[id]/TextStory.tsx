"use client";

import { translateFunc } from "@/utils/supabase/Translate";
import { useState } from "react";

export default function TextStory({para}: {para: string}) {
    const [paragraph, setPara] = useState(translateFunc("text-morse", para))
  return (
    <>
    <p>{paragraph}</p>
    <button onClick={() => setPara(para)}>Translate</button>
    </>
  );
}
