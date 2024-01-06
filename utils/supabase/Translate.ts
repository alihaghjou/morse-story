const MorseDoc = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};
/**
 * Converts text to morse code and reverse
 * @param type: the way of the translation
 * @param originalText: string
 * @returns string
 */
export function translateFunc(
  type: "text-morse" | "morse-text",
  originalText: string
) {
  const keys = Object.keys(MorseDoc);
  const values = Object.values(MorseDoc);
  switch (type) {
    case "morse-text":
      const splicedMorse = originalText.split(" ");
      let TempText = "";
      for (let i = 0; i < splicedMorse.length; i++) {
        if (splicedMorse[i] === "/") {
          TempText += " ";
        } else {
          const index = values.indexOf(splicedMorse[i]);
          TempText += keys[index];
        }
      }
      return TempText;
    case "text-morse":
      const lowered = originalText.toLowerCase();
      let TempMorse = "";
      for (let i = 0; i < lowered.length; i++) {
        if (lowered[i] === " ") {
          TempMorse += " " + "/";
        } else {
          const index = keys.indexOf(lowered[i]);
          TempMorse += " " + values[index];
        }
      }
      return TempMorse;
  }
}
