"use client"

import { useState } from "react"
import { MorseDoc } from "@/utils/supabase/Morse"

export default function Translate() {
    const [original, setOriginal] = useState("T")
    const [morse, setMorse] = useState("")
  
    function translateFunc() {

    }

    return (
    <div>
        <p>{original}</p>
        <button onClick={translateFunc}>Translate</button>
        <p>{morse}</p>
    </div>
  )
}
