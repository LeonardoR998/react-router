import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <div className="page-wrapper">
        <header>
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="text-bg-dark bg-gradient py-4">
          <div className="container">
            <h1>Footer</h1>
          </div>
        </footer>
      </div>
    </>
  );
}
