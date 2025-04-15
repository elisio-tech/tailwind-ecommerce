import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loyalt from "./loyalt/Loyalt";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Loyalt />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
