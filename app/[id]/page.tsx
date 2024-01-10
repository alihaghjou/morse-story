import TableModal from "@/components/TableModal";
import { translateFunc } from "@/utils/supabase/Translate";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import TextStory from "./TextStory";

type DatabaseType = {
  data: {
    id: number;
    created_at: string;
    story: string[];
    title: string;
  } | null;
};

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: story }: DatabaseType = await supabase
    .from("Story")
    .select()
    .eq("id", params.id)
    .maybeSingle();

  return (
    story && (
      <div>
        <h2>{story.title}</h2>
        <h4>{story.created_at}</h4>
        {story.story.map((para) => (
          <TextStory para={para} />
        ))}
        <TableModal />
      </div>
    )
  );
}
