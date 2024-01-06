import { translateFunc } from "@/utils/supabase/Translate";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

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
        <p>{translateFunc("text-morse", para)}</p>
      ))}
    </div>
  );
}
