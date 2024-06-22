import { Outlet } from "react-router-dom";
import { Menu } from "./views/menu/Menu";

export default function Layout() {
  return (
    <div className="ui container">
      <Menu />
      <Outlet />
    </div>
  );
}
