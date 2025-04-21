import { Apple, BagHappy } from "iconsax-reactjs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 ">
      <nav className="max-w-4xl mx-4 sm:mx-auto flex justify-between items-center">
        <Link to="/">
          <Apple size={28} color="#000" variant="Bold" />
        </Link>

        <div className="py-8 flex gap-8">
          <ul className="flex justify-center items-center gap-8">
            <li>Home</li>
            <li>Feature</li>
            <li>Specs</li>
          </ul>

          <button>
            <span>Cart{" "} [0]</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
