import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Connections from "@/components/Connections";
import MouseParticleTrail from "@/components/MouseParticleTrail";
import React, { Suspense } from "react";
import CustomCursor from "./components/ui/Cursor";
import ReactLenis from "lenis/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = React.lazy(() => import("./components/Footer"));

const HomePage = () => (
  <>
    <Hero />
    <MouseParticleTrail />
    <Suspense>
      <Footer />
    </Suspense>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <ReactLenis root>
        <CustomCursor />
        <main className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/connections" element={<Connections />} />
          </Routes>
        </main>
      </ReactLenis>
    </BrowserRouter>
  );
};

export default App;

