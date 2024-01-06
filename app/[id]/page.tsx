import { MorseDoc } from "@/utils/supabase/Morse";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

function translateFunc(
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

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: story,
  }: { data: { id: number; created_at: string; story: string[] } | null } =
    await supabase.from("Story").select().eq("id", params.id).maybeSingle();
  translateFunc("morse-text", ".. - / ..-.");
  return (
    <div>
      {story?.story.map((para) => (
        <p>{translateFunc("text-morse", para)}</p>
      ))}
    </div>
  );
}
