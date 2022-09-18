import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import Demo from "./pages/Demo.js";
import Intro from "./pages/Intro.js";
import Setup from "./pages/Setup.js";
import Player from "./pages/Player.js";
import Fov from "./pages/Fov.js";
import Ray from "./pages/Ray.js";
import Final from './pages/Final.js';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/learning-intro" element={<Intro />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/player_input" element={<Player />} />
        <Route path="/fov" element={<Fov />} />
        <Route path="/rays" element={<Ray />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;