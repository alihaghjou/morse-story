import { MorseDoc } from "@/utils/supabase/Morse";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

function translateFunc(originalText: string, MorseText?: string) {
    //only works for text to morse for now
  const lowered = originalText.toLowerCase();
  const keys = Object.keys(MorseDoc);
  const values = Object.values(MorseDoc);
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

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: story,
  }: { data: { id: number; created_at: string; story: string[] } | null } =
    await supabase.from("Story").select().eq("id", params.id).maybeSingle();
  return (
    <div>
      {story?.story.map((para) => (
        <p>{translateFunc(para)}</p>
      ))}
    </div>
  );
}
