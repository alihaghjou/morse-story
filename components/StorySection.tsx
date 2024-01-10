import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export default async function StorySection() {
    const supabase = createClient(cookies())
    const {data} = await supabase.from("Story").select("title")
    console.log(data)
  return (
    <div>
        {data?.map((info) => (
            <div className="mx-4">{info.title}</div>
        ))}
    </div>
  )
}
