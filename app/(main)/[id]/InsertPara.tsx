"use client";

import { useState } from "react";
import InsertButton from "./InsertButton";

export default function InsertPara() {
  const [userPara, setPara] = useState("");
  function handleAddText(insert: "-" | "." | "space") {
    if (insert === "space") {
      setPara(userPara + " / ");
      return;
    }
    setPara(userPara + insert);
  }
  return (
    <form className="w-1/2">
      <div className="w-full mb-4 border border-gray-200 rounded-lg dark:border-gray-700">
        <div className="px-4 py-2 rounded-t-lg">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            value={userPara}
            id="comment"
            rows={8}
            className="w-full px-0 text-sm bg-inherit text-gray-900 border-0 outline-none dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div className="flex items-center flex-col gap-8 px-3 py-2 border-t dark:border-gray-800">
          <div className="flex gap-2 justify-center items-center">

            <InsertButton handleAddText={handleAddText} insertV="." />
            <InsertButton handleAddText={handleAddText} insertV="-" />
            <InsertButton handleAddText={handleAddText} insertV="space" />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium rounded-lg text-center hover:bg-white/90 bg-white text-[#18181b]"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
}
