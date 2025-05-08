export default function Shop() {
  return (
    <div className="relative grid items-center mt-32 h-[60vh]  rounded-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 bg-[#FF9D23] overflow-visible z-10">
      
      <div className="px-6 lg:px-12 relative z-20">
        <div className="">
          <h1 className="text-6xl mb-2">
            Flow <br /> Jogger Pants
          </h1>
          <p className="mb-4 text-zinc-700 font-medium">
            Nike is more than you can feel, it makes you better. 
          </p>
          <button className="px-8 bg-black text-white py-3 rounded-lg">
            Add to bag
          </button>
        </div>
      </div>

      {/* Imagem posicionada acima do container */}
      <img
        src={"/images/shop-1.png"}
        alt="Shop Image"
        className="absolute bottom-0 right-44 z-30 object-contain h-[80vh]"
      />
    </div>
  );
}
