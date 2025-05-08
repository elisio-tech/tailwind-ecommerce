import { work } from "../data/work";

export default function Work() {
  return (
    <section className="pt-44 mb-8">
      <div className=" border-y border-zinc-300 gap-x-4 grid grid-cols-3 items-center">
        {work.map((item, i) => (
          <div
            key={i}
            className={`px-10 py-16 ${i > 0 ? "border-l border-zinc-300" : ""}`}
          >
            <img className="w-16 mb-8" src={item.img} alt={item.title} />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="lg:text-sm xl:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
