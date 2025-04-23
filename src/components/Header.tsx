import { Apple, BagHappy, SearchNormal, Shop } from "iconsax-reactjs";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = ["Man", "Woman", "Kids"];
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <h2 className="text-center uppercase text-sm bg-blue-600 py-2 text-white">
        Free express shipping on orders over $290
      </h2>

      <nav className="max-w-4xl text-white mx-4 sm:mx-auto py-4 flex items-center justify-between">
        <div className="w-1/3">
          <ul className="flex space-x-6">
            {navLinks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-1/3 text-center">
          <span className="self-center">Contrasté</span>
        </div>

        <div className="w-1/3 flex justify-end items-center gap-8">
          <button>
            <Shop size={24} color="#fff" />
          </button>
        </div>
      </nav>
    </header>
  );
}
