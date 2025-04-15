import { Shop } from "iconsax-reactjs";
import Menu from "../ui/Menu";

export default function Header() {
  const nav = ["Bags", "Shoes", "Accessory"];
  return (
    <header className="max-w-4xl mx-8 sm:mx-auto py-8">
      <nav className="flex justify-between items-center">
        <span>Krugs</span>
        <div>
          <ul className="flex gap-x-8">
            {nav.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button className="hidden">
            <Shop size={24} color="#000" />
          </button>
        </div>

        <Menu />
      </nav>
    </header>
  );
}
