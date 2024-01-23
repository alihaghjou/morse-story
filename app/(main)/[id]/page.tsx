import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import TextStory from "./TextStory";
import InsertPara from "./InsertPara";

type DatabaseType = {
  data: {
    id: number;
    created_at: string;
    story: string[];
    title: string;
  } | null;
};

export default async function Page({ params }: { params: { id: string } }) {
  let isAuth = false;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: user } = await supabase.auth.getUser();
  if (user.user) {
    isAuth = true;
  } else {
    isAuth = false;
  }
  const { data: story }: DatabaseType = await supabase
    .from("Story")
    .select()
    .eq("id", params.id)
    .maybeSingle();

  return (
    story && (
      <div className="w-full p-4 flex justify-center items-center flex-col">
        <h2>{story.title}</h2>
        <h4>{story.created_at}</h4>
        {story.story.map((para) => (
          <TextStory para={para} isAuth={isAuth} />
        ))}
        <InsertPara />
      </div>
    )
  );
}
