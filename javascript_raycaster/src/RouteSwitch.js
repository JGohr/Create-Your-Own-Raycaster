import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import Demo from "./pages/Demo.js";
import Intro from "./pages/Intro.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/learning-intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;