import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import "./Root.css"

export function Root() {
  return (
    <>
      <div className="header">
      <Header />
      </div>
      <div className="main">
      <Outlet />
      </div>
      <div className="footer">
      <Footer />
     </div>
    </>
  );
}
