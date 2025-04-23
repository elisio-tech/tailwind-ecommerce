export default function Hero() {
  return (
    <section className="relative h-screen text-white pt-28">
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Fashion model"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto  pt-64">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Pushing boundaries,
          <br />
          one look at a time
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          It's not just fashion — it's a statement, a bold expression of style
        </p>
        <button className="mt-6 px-12 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
