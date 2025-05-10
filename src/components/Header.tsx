import { SearchNormal1 } from "iconsax-reactjs";
import { Link } from "react-router-dom";

export default function Header() {
  const nav = ["Products", "Shorts", "Socks"];
  return (
    <header className="fixed top-0 left-0 right-0 border-b border-zinc-300 z-50 bg-white">
      <nav className="uppercase relative mx-auto lg:max-w-4xl xl:max-w-6xl text-md xl:text-xl flex justify-between items-center py-6">
        <div className="flex items-center gap-x-8">
          <button
            aria-label="Open menu"
            className="cursor-pointer transition-all flex justify-center items-center gap-1 flex-col bg-zinc-200 w-12 h-12 rounded-full"
          >
            {[1, 2].map((item) => (
              <div key={item} className="w-6 h-[1px] bg-[#181C14]" />
            ))}
          </button>

          <ul className="flex gap-x-6">
            {nav.map((item, i) => (
              <li key={i}>
                <Link to={`/${item.toLowerCase()}`} className="hover:underline ">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl text-center font-bold"
        >
          <img src={"/images/logo1.svg"} alt="logo" />
        </Link>

        <div className="flex gap-x-6">
          <Link to="/sign-in" className="hover:underline">
            Account
          </Link>
          <button className="uppercase hover:underline">Bag(0)</button>
          <button>
            <SearchNormal1 size={24} color="#181C14" />
          </button>
        </div>
      </nav>
    </header>
  );
}
