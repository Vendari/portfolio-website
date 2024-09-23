import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar";

import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar";

export default function App() {
  return (
    <div className="relative h-screen">
      <TopBar />
      <main>
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
