export default function Shop() {
  return (
    <div className="mb-24 relative grid items-center mt-32 h-[60vh]  rounded-2xl lg:max-w-4xl xl:max-w-6xl mx-auto  bg-[#FF9D23] overflow-visible z-10">
      
      <div className="px-4  lg:px-12 relative z-20 ">
        <div className="">
          <h1 className="lg:text-6xl xl:text-7xl mb-2">
            Gym <br /> Apparel
          </h1>
          <p className="mb-4 text-zinc-700 xl:text-xl">
            Elevate your workout with premium gym wear that combines <br />  style and performance.
          </p>
          <button className="px-12 bg-black text-white py-3 rounded-lg xl:text-xl">
            Add to bag
          </button>
        </div>
      </div>

      <img
        src={"/images/shop-1.png"}
        alt="Shop Image"
        className="absolute bottom-0 right-44 z-30 object-contain lg:h-[80vh] xl:h-[90vh]"
      />
    </div>
  );
}
