import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loyalt from "./loyalt/Loyalt";
import HomePage from "./pages/HomePage";
import SignUp from "./components/auth/Sign-up";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/ShopContext";
import ShortsPage from "./pages/ShortsPage";


export default function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route element={<Loyalt />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </CartProvider>
   
    </Router>
  );
}
