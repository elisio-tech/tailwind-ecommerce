import { ArrowRight } from "iconsax-reactjs";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagem de fundo */}
      <img
        src="/images/hero-3.webp"
        alt="hero"
        className="absolute inset-0 object-contain w-full h-full shadow-2xl"
      />

      {/* Conteúdo centralizado */}
      <div className="mx-auto max-w-4xl flex items-center h-screen pt-24 relative z-10 text-[#181C14]">
        <div>
          <h1 className="text-7xl mb-3">
            Find Your <br /> Flow
          </h1>
          <p className="pb-6 mb-18 text-zinc-600">
            Blade Course Polo with your own outfit
          </p>
        </div>
      </div>

      <div className="absolute flex justify-between items-end left-0  right-2 bottom-2">
        <span className="text-sm ml-16 pb-4">Scroll down</span>
        <div className="flex gap-4 h-36 p-2 bg-[#697565] rounded-md shadow-2xl">
          <img src="/images/kobe.avif" className="object-cover rounded-sm" />
          <div className=" flex flex-col justify-between">
            <h2 className="text-2xl text-[#ECDFCC]">
              Buy new T-shert for your <br /> gymn work
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-[#3C3D37]">Explore the collection</h3>
              <ArrowRight size="32" color="#3C3D37" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
