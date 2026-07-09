import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default MainLayout;