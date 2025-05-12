import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCart from "../components/cart/ShoppingCart";

export default function Loyalt() {
  return (
    <div>
      <Header />
      <Outlet />
      <ShoppingCart />
      <Footer />
    </div>
  );
}
