import { Outlet } from "react-router-dom";
import Navbar from "../components/homenavbar";
import Footer from "../components/footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;