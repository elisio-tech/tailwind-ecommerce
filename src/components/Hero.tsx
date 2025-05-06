import { ArrowRight } from "iconsax-reactjs";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagem de fundo */}
      <img
        src="/images/hero-3.webp"
        alt="hero"
        className="mb-8 absolute inset-0 object-contain w-full h-full "
      />

      {/* Conteúdo centralizado */}
      <div className="mx-auto max-w-4xl lg:max-w-4xl xl:max-w-6xl flex items-center h-screen pt-24 relative z-10 text-[#181C14]">
        <div>
          <h1 className="lg:text-7xl xl:text-8xl mb-3">
            Find Your <br /> Flow
          </h1>
          <p className="pb-6 mb-18 text-zinc-600">
            Blade Course Polo with your own outfit
          </p>
        </div>
      </div>

      <div className="absolute flex justify-between items-end left-0  right-2 bottom-6">
        <span className="text-sm lg:ml-16 xl:ml-24 pb-4 lg:text-xl">Scroll down</span>
        <div className="lg:mx-8 flex gap-2 lg:h-36 xl:h-44 lg:p-2 xl:p-3 bg-[#697565] rounded-md shadow-md">
          <img src="/images/kobe.avif" className="object-cover rounded-sm" />
          <div className=" flex flex-col justify-between lg:px-4">
            <h2 className="lg:text-2xl xl:text-3xl text-[#ECDFCC]">
              Buy new T-shert for your <br /> gymn work
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="text-[#3C3D37] lg:text-xl xl:text-2xl pr-8">Explore the collection</h3>
              <ArrowRight size="32" color="#3C3D37" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
