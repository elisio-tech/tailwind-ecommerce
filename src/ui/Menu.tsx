export default function Menu() {
  return (
    <button className="cursor-pointer flex justify-center items-center gap-1 flex-col bg-zinc-900 w-12 h-12 rounded-full">
      {[1, 2].map((item) => (
        <div key={item} className="w-6 h-[1px] bg-white" />
      ))}
    </button>
  );
}
