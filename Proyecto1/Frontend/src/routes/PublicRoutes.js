import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Administrators from "../pages/Administrators";
import Developers from "../pages/Developers";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

export default function PublicRoutes() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administradores" element={<Administrators />} />
          <Route path="/desarrolladores" element={<Developers />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
