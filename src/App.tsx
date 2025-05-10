import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loyalt from "./loyalt/Loyalt";
import HomePage from "./pages/HomePage";
import SignUp from "./components/auth/Sign-up";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Loyalt />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/sign-up" element={<SignUp /> } />
      </Routes>
    </Router>
  );
}
