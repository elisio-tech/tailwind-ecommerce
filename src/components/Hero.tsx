import { ShoppingBag } from "iconsax-reactjs";

export default function Hero() {
  return (
    <div className="bg-zinc-100">
      <div className="relative grid place-content-center h-screen mx-8 sm:mx-auto max-w-4xl">
        <h1 className="text-[24rem]">Code</h1>
        <div>
          <div className="flex absolute bottom-8 left-0 items-center">
            <div className="w-10 h-10 border border-zinc-700 flex justify-center items-center rounded-full">
              {" "}
              <ShoppingBag size={24} color="#000" />
            </div>
            <button className="bg-black px-8 py-3 rounded-4xl text-white">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
