
export default function InsertButton({handleAddText, insertV} : {
    handleAddText: (insert: "." | "-" | "space") => void,
    insertV: "." | "-" | "space"
}) {
  return (
    <button
    type="button"
    onClick={() => handleAddText(insertV)}
    className="inline-flex items-center rounded hover:bg-white/90 bg-white text-[#18181b] py-3 px-5 text-lg font-medium text-center"
  >
    {insertV}
  </button>
  )
}
