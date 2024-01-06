import { MorseDoc } from '@/utils/supabase/Morse';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page({params} : {params: {id: string}}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: notes } = await supabase.from("Story").select().eq("id", params.id);

  return (
    <div>
        <p>
            T
        </p>
    </div>
  )
}