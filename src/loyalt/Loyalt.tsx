import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Loyalt() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
