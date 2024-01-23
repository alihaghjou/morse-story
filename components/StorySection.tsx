import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function StorySection() {
  const supabase = createClient(cookies());
  const { data } = await supabase.from("Story").select("title");
  return (
    <div className="dark:bg-neutral-950 bg-neutral-100 p-2 rounded">
      {data?.map((info) => (
        <div key={info.title} className="mx-4">
          {info.title}
        </div>
      ))}
    </div>
  );
}
