import { Apple, ShoppingCart } from "iconsax-reactjs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <Apple size={24} color="#000" />
        </Link>

        <div>
          <ul>
            <li>Home</li>
            <li>Feature</li>
            <li>Specs</li>
          </ul>
        </div>

        <button>
          <ShoppingCart size={24} color="#000" />
        </button>
      </nav>
    </header>
  );
}
